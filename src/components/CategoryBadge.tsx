import Link from "next/link";
import { getCategoryLabel } from "@/lib/categories";

export default function CategoryBadge({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  return (
    <Link
      href={`/category/${category}`}
      className={`inline-block text-xs font-semibold uppercase tracking-wider text-brick hover:text-copper ${className}`}
    >
      {getCategoryLabel(category)}
    </Link>
  );
}
