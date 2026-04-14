import { ArrowLeft } from "lucide-react";

interface PreviousBtnProps {
  onPrevious: () => void;
}

export const PreviousBtn: React.FC<PreviousBtnProps> = ({ onPrevious }) => {
  return (
    <button
      onClick={onPrevious}
      className="btn btn-secondary btn-circle btn-soft"
    >
      <ArrowLeft />
    </button>
  );
};
