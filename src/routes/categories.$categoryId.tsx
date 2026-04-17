import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getIcebreakersByCategory } from "../data/icebreakers";
import { CategoryView } from "../components/CategoryView";

export const Route = createFileRoute("/categories/$categoryId")({
  component: function CategoryPage() {
    const { categoryId } = Route.useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const icebreakers = getIcebreakersByCategory(categoryId);

    const currentIcebreaker =
      currentIndex < icebreakers.length ? icebreakers[currentIndex] : null;
    const previousIcebreaker =
      currentIndex > 0 ? icebreakers[currentIndex - 1] : null;

    // const currentColor =
    //   categories.find((c) => c.id === categoryId)?.color ?? "";

    const handleNext = () => {
      setCurrentIndex(currentIndex + 1);
    };

    const handlePrevious = () => {
      setCurrentIndex(currentIndex - 1);
    };

    const handleRandom = () => {
      const randomIndex = Math.floor(Math.random() * icebreakers.length);
      setCurrentIndex(randomIndex);
    };

    return (
      <div className="min-h-screen bg-base-200 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <CategoryView
            title={categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
            currentQuestion={currentIcebreaker}
            previousQuestion={previousIcebreaker}
            onNext={handleNext}
            onPrevious={handlePrevious}
            currentIndex={currentIndex}
            totalQuestions={icebreakers.length}
            onRandom={handleRandom}
          />
        </div>
      </div>
    );
  },
});
