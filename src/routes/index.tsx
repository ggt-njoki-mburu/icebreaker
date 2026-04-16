import { createFileRoute } from "@tanstack/react-router";
import { categories } from "../data/icebreakers";
import { CategoryCard } from "../components/CategoryCard";

export const Route = createFileRoute("/")({
  component: function HomePage() {
    return (
      <div className="min-h-screen bg-base-200 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
              Icebreaker App 🧊
            </h1>
            <p className="text-base-content/70 flex items-center justify-center gap-2">
              <span></span> Choose a category to get started <span></span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    );
  },
});
