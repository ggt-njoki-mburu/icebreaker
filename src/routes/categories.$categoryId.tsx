import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { getIcebreakersByCategory } from "../data/icebreakers";

export const Route = createFileRoute("/categories/$categoryId")({
  component: function CategoryPage() {
    const { categoryId } = Route.useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const icebreakers = getIcebreakersByCategory(categoryId);
    const currentIcebreaker = icebreakers[currentIndex];

    const handleNext = () => {
      if (currentIndex < icebreakers.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    return (
      <div className="min-h-screen bg-base-200 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <Link to="/" className="btn btn-ghost gap-2">
              ← Back
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold text-base-content">
              {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}{" "}
              Icebreakers
            </h1>

            <div className="badge badge-primary badge-lg">
              {currentIndex + 1} / {icebreakers.length}
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-8 md:p-12 min-h-[400px] justify-center">
              <p className="text-xl md:text-2xl text-center leading-relaxed">
                {currentIcebreaker}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="btn btn-primary gap-2"
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === icebreakers.length - 1}
              className="btn btn-primary gap-2"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  },
});
