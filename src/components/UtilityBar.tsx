import { site } from "@/data/site";

export default function UtilityBar() {
  return (
    <div className="bg-ink text-paper text-[13px]">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center text-center">
        <a href={site.phoneHref} className="hover:text-lime transition-colors">
          {site.utilityBar}
        </a>
      </div>
    </div>
  );
}
