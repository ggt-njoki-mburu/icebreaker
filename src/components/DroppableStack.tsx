import { useDroppable } from "@dnd-kit/core";

export function DroppableStack({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { setNodeRef: setDropRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setDropRef}
      className={`transition-colors p-2 rounded-lg ${
        isOver ? "bg-green-200 ring-2 ring-green-500" : ""
      }`}
    >
      {children}
    </div>
  );
}
