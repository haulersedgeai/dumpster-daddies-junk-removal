"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const PAGES_WITHOUT_FORM = ["/terms", "/privacy"];

export default function QuoteLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname() || "/";
  const target = PAGES_WITHOUT_FORM.includes(pathname)
    ? "/contact#get-quote"
    : "#get-quote";

  return (
    <Link href={target} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
