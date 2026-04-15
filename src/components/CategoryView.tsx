import { Heading } from "./Heading";
import { Link } from "@tanstack/react-router";
import { NextBtn } from "./NextBtn";
import { PreviousBtn } from "./PreviousBtn";
import { HomeIcon } from "lucide-react";

interface CategoryViewProps {
  title: string;
  currentQuestion: string;
  nextQuestion: string | null;
  currentIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  title,
  currentQuestion,
  nextQuestion,
  onNext,
  onPrevious,
  currentIndex,
  totalQuestions,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center text-center">
        <Link to="/" className="btn btn-circle">
          <HomeIcon />
        </Link>
        <Heading level={1}>"{title}" IceBreakers</Heading>
        <div className="badge badge-accent">
          {currentIndex + 1} of {totalQuestions}
        </div>
      </div>
      <div className="w-sm md:w-2xl flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-0 items-center">
        {nextQuestion && (
          <div className="stack stack-start size-64">
            <div className="card bg-secondary shadow-sm">
              <div className="card-body flex items-center justify-center text-secondary-content font-semibold text-lg">
                {nextQuestion}
              </div>
            </div>
            <div className="card bg-accent text-center shadow-sm">
              <div className="card-body"></div>
            </div>
            <div className="card bg-neutral text-center shadow-sm">
              <div className="card-body"></div>
            </div>
          </div>
        )}
        <div className="stack stack-end size-64">
          <div className="card bg-primary shadow-sm">
            <div className="card-body flex items-center justify-center text-primary-content font-semibold text-lg">
              {currentQuestion}
            </div>
          </div>
          <div className="card bg-accent text-center shadow-sm">
            <div className="card-body"></div>
          </div>
          <div className="card bg-neutral text-center shadow-sm">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <div className="flex w-sm md:w-md justify-between mt-12">
        <PreviousBtn onPrevious={onPrevious} />
        <NextBtn onNext={onNext} disabled={!nextQuestion} />
      </div>
    </div>
  );
};
