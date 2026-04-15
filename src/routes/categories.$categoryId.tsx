import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { getIcebreakersByCategory } from "../data/icebreakers";
import { CategoryView } from "../components/CategoryView";

export const Route = createFileRoute("/categories/$categoryId")({
  component: function CategoryPage() {
    const { categoryId } = Route.useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const icebreakers = getIcebreakersByCategory(categoryId);
    const currentIcebreaker = icebreakers[currentIndex];
    const nextIcebreaker =
      currentIndex < icebreakers.length - 1
        ? icebreakers[currentIndex + 1]
        : null;

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

    const handleRandom = () => {
      const randomIndex = Math.floor(Math.random() * icebreakers.length);
      setCurrentIndex(randomIndex);
    };

    return (
      <div className="min-h-screen bg-base-200 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-base-100 hover:bg-white dark:hover:bg-base-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-base-content/70 hover:text-base-content border border-base-200 dark:border-base-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <CategoryView
              title={categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
              currentQuestion={currentIcebreaker}
              nextQuestion={nextIcebreaker}
              onNext={handleNext}
              onPrevious={handlePrevious}
              currentIndex={currentIndex}
              totalQuestions={icebreakers.length}
            />
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="btn btn-primary gap-2"
            >
              ← Previous
            </button>

            <button onClick={handleRandom} className="btn btn-secondary gap-2">
              🎲 Random
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
