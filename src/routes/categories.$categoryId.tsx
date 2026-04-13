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
      <div className="category-page">
        <div className="header">
          <Link to="/" className="back-button">
            ← Back to Categories
          </Link>
          <h1>{categoryId.toUpperCase()} Icebreakers</h1>
          <div className="counter">
            {currentIndex + 1} / {icebreakers.length}
          </div>
        </div>

        <div className="card-container">
          <div className="icebreaker-card">
            <p>{currentIcebreaker}</p>
          </div>
        </div>

        <div className="navigation">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="nav-button"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === icebreakers.length - 1}
            className="nav-button"
          >
            Next →
          </button>
        </div>
      </div>
    );
  },
});
