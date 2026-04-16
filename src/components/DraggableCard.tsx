import { useDraggable, useDroppable } from "@dnd-kit/core";

interface DraggableCardProps {
  id: string;
  content: string;
  bgColor: string;
  textColor: string;
  className?: string;
}

export default function DraggableCard({
  id,
  content,
  bgColor,
  textColor,
  className,
}: DraggableCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
    isDragging,
  } = useDraggable({ id });

  const { setNodeRef: setDropRef, isOver } = useDroppable({ id });

  function setRefs(node: HTMLElement | null) {
    setDragRef(node);
    setDropRef(node);
  }

  return (
    <div
      ref={setRefs}
      {...listeners}
      {...attributes}
      className={`${className ?? "w-full"}`}
      style={{
        display: "block",
        width: "100%",
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        touchAction: "none",
        zIndex: isDragging ? 999 : undefined,
        height: "100%",
      }}
    >
      <div
        className={`card ${bgColor} shadow-sm h-full border border-base-content ${isOver ? "opacity-50" : "opacity-100"}`}
      >
        <div
          className={`card-body flex items-center justify-center ${textColor} font-semibold text-lg`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
