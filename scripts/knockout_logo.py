"""Corner flood-fill to make the outer cream background of photos/Logo.png transparent.

Strategy: BFS from each of the four corners, marking pixels whose Euclidean RGB
distance to the corner sample is within TOLERANCE. Only the connected region
that touches a corner is removed, so cream pixels INSIDE the crest (lettering,
banner highlights) are preserved.
"""

from __future__ import annotations

import sys
from pathlib import Path
from collections import deque

from PIL import Image


SRC = Path("photos/Logo.png")
DST = Path("public/logo.png")
TOLERANCE = 38          # RGB Euclidean distance (sqrt(3*255^2) ≈ 441 max)
FEATHER_RADIUS = 1      # soften the cut edge by 1px (set 0 to disable)


def rgb_dist_sq(a, b):
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2


def main() -> int:
    if not SRC.exists():
        print(f"missing source: {SRC}", file=sys.stderr)
        return 1

    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    px = img.load()

    # Sample each corner (average of a small box for robustness)
    def sample(cx, cy):
        rs, gs, bs, n = 0, 0, 0, 0
        for dx in range(-2, 3):
            for dy in range(-2, 3):
                x = min(max(cx + dx, 0), w - 1)
                y = min(max(cy + dy, 0), h - 1)
                r, g, b, _ = px[x, y]
                rs += r; gs += g; bs += b; n += 1
        return (rs // n, gs // n, bs // n)

    corners = [
        sample(0, 0),
        sample(w - 1, 0),
        sample(0, h - 1),
        sample(w - 1, h - 1),
    ]

    tol_sq = TOLERANCE * TOLERANCE
    visited = bytearray(w * h)  # 0 = untouched, 1 = transparent

    def idx(x, y):
        return y * w + x

    q: deque[tuple[int, int]] = deque()
    for cx, cy in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        q.append((cx, cy))

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h:
            continue
        i = idx(x, y)
        if visited[i]:
            continue
        r, g, b, _ = px[x, y]
        if min(rgb_dist_sq((r, g, b), c) for c in corners) > tol_sq:
            continue
        visited[i] = 1
        q.append((x + 1, y))
        q.append((x - 1, y))
        q.append((x, y + 1))
        q.append((x, y - 1))

    # Apply: set alpha to 0 for visited pixels
    cut = 0
    for y in range(h):
        for x in range(w):
            if visited[idx(x, y)]:
                r, g, b, _ = px[x, y]
                px[x, y] = (r, g, b, 0)
                cut += 1

    # Soft feather: pixels neighboring the transparent region get reduced alpha
    if FEATHER_RADIUS > 0:
        feathered = 0
        for y in range(h):
            for x in range(w):
                if visited[idx(x, y)]:
                    continue
                # if any neighbor (8-way, within feather radius) is transparent, soften
                soft = False
                for dx in range(-FEATHER_RADIUS, FEATHER_RADIUS + 1):
                    for dy in range(-FEATHER_RADIUS, FEATHER_RADIUS + 1):
                        nx, ny = x + dx, y + dy
                        if 0 <= nx < w and 0 <= ny < h and visited[idx(nx, ny)]:
                            soft = True
                            break
                    if soft:
                        break
                if soft:
                    r, g, b, a = px[x, y]
                    px[x, y] = (r, g, b, int(a * 0.65))
                    feathered += 1
        print(f"feathered edge pixels: {feathered}")

    DST.parent.mkdir(parents=True, exist_ok=True)
    img.save(DST, "PNG", optimize=True)

    pct = cut * 100 / (w * h)
    print(f"src: {SRC} ({w}x{h})  →  dst: {DST}")
    print(f"corner samples: {corners}")
    print(f"removed pixels: {cut} ({pct:.1f}% of image)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
