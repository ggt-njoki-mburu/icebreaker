import { Heading } from "./Heading";
import { Link } from "@tanstack/react-router";
import { NextBtn } from "./NextBtn";
import { PreviousBtn } from "./PreviousBtn";
import { ArrowLeft } from "lucide-react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import DraggableCard from "./DraggableCard";
import { RandomBtn } from "./RandomBtn";
import { DroppableStack } from "./DroppableStack";
import { motion } from "motion/react";

interface CategoryViewProps {
  title: string;
  currentQuestion: string | null; // current question
  previousQuestion: string | null; // previous question
  currentIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
  onRandom: () => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  title,
  currentQuestion,
  previousQuestion,
  onNext,
  onPrevious,
  currentIndex,
  totalQuestions,
  onRandom,
}) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    if (active.id !== over?.id) {
      if (
        (active.id === "current-question" && over.id === "next-question") ||
        (active.id === "current-question" &&
          over.id === "previousQuestionEmptyStack")
      ) {
        onNext();
      } else if (
        active.id === "next-question" &&
        over.id === "current-question"
      ) {
        onPrevious();
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center text-center">
          <div
            className="tooltip tooltip-bottom"
            data-tip="Go back to categories"
          >
            <Link to="/" className="btn btn-ghost btn-soft">
              <ArrowLeft /> Go Back Home
            </Link>
          </div>
          <Heading level={1}>"{title}" IceBreakers</Heading>
          <div className="badge badge-accent">
            {currentIndex >= 0 && currentIndex < totalQuestions
              ? currentIndex + 1
              : "--"}{" "}
            of {totalQuestions}
          </div>
        </div>
        <div className="w-sm md:w-2xl flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-0 items-center">
          {previousQuestion ? (
            <div className="order-2 md:order-1">
              <DroppableStack id="next-question">
                <div className="stack stack-start size-64">
                  <motion.div
                    initial={{ rotate: 0, y: 20, opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="card bg-secondary text-secondary-content text-center shadow-sm border border-base-content h-full">
                      <div className="card-body flex items-center justify-center font-semibold text-lg">
                        {previousQuestion}
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ rotate: -5, y: 20, opacity: 0 }}
                    animate={{ rotate: -5, y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="card bg-secondary/80 text-center shadow-sm border border-base-content/50 h-full">
                      <div className="card-body"></div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ rotate: -10, y: 20, opacity: 0 }}
                    animate={{ rotate: -10, y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="card bg-secondary/60 text-center shadow-sm border border-base-content/30 h-full">
                      <div className="card-body"></div>
                    </div>
                  </motion.div>
                </div>
              </DroppableStack>
            </div>
          ) : (
            <div className="order-2 md:order-1">
              <EmptyStack
                facing="start"
                droppableId="previousQuestionEmptyStack"
                enabled={currentIndex === 0}
              />
            </div>
          )}
          {currentQuestion ? (
            <div className="stack stack-end size-64 order-1 md:order-2">
              <motion.div
                initial={{ rotate: 0, y: 20, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <DraggableCard
                  id="current-question"
                  content={currentQuestion}
                  bgColor="bg-primary"
                  textColor="text-primary-content"
                  className="w-full"
                />
              </motion.div>
              <motion.div
                initial={{ rotate: 5, y: 20, opacity: 0 }}
                animate={{ rotate: 5, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="card bg-primary/80 text-center shadow-sm h-full border border-base-content/50">
                  <div className="card-body"></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ rotate: 10, y: 20, opacity: 0 }}
                animate={{ rotate: 10, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card bg-primary/60 text-center shadow-sm h-full border border-base-content/30">
                  <div className="card-body"></div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="order-1 md:order-2">
              <EmptyStack facing="end" />
            </div>
          )}
        </div>
        <div className="flex w-sm md:w-md justify-between mt-12">
          <NextBtn onNext={onNext} disabled={!currentQuestion} />
          <RandomBtn onRandom={onRandom} />
          <PreviousBtn onPrevious={onPrevious} disabled={!previousQuestion} />
        </div>
      </div>
    </DndContext>
  );
};

type EmptyStackProps = {
  droppableId?: string;
  facing: "start" | "end";
  enabled?: boolean;
};

const EmptyStack = ({ facing, enabled, droppableId }: EmptyStackProps) => {
  return enabled && droppableId ? (
    <DroppableStack id={droppableId}>
      <div className={`stack stack-${facing} size-64`}>
        <div className="border-base-content card bg-primary/20 border border-dashed text-center">
          <div className="card-body"></div>
        </div>
        <div className="border-base-content card bg-primary/20 border border-dashed text-center">
          <div className="card-body"></div>
        </div>
        <div className="border-base-content card bg-primary/20 border border-dashed text-center">
          <div className="card-body"></div>
        </div>
      </div>
    </DroppableStack>
  ) : (
    <div className={`stack stack-${facing} size-64`}>
      <div className="border-base-content card bg-primary/20 border border-dashed text-center">
        <div className="card-body"></div>
      </div>
      <div className="border-base-content card bg-primary/20 border border-dashed text-center">
        <div className="card-body"></div>
      </div>
      <div className="border-base-content card bg-primary/20 border border-dashed text-center">
        <div className="card-body"></div>
      </div>
    </div>
  );
};
