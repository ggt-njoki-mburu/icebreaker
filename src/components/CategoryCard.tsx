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
      className="group no-underline w-full"
    >
      <div
        className="
            card bg-base-100 
            hover:bg-base-300/80 
            border border-transparent
            hover:border-base-content/10
            card-sm
            transition-all
            duration-200
            ease-[cubic-bezier(.25,.46,.45,.94)]
            hover:scale-[1.02]
            "
            data-cy="category-card"
      >
        <div className="card-body">
          <p className="text-2xl text-center transition-transform duration-200 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:rotate-12 group-hover:scale-110">
            {category.icon}
          </p>
          <h2 className="card-title text-lg md:text-2xl flex justify-center">
            {category.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}
