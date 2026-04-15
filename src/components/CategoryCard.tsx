import type { Category } from "@/types";
import { Link } from "@tanstack/react-router";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to="/categories/$categoryId"
      params={{ categoryId: category.id }}
      className="no-underline w-full"
    >
      <div
        className="
            card bg-base-200 
            hover:bg-base-300/80 
            border border-transparent
            hover:border-base-content/10
            card-sm
            w-full
            transition-all
            duration-200
            ease-[cubic-bezier(.25,.46,.45,.94)]
            hover:scale-101
            "
      >
        <div className="card-body">
          <h2 className="card-title text-lg md:text-2xl">{category.name}</h2>
        </div>
      </div>
    </Link>
  );
}
