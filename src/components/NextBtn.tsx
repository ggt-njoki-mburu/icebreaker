import { ArrowRight } from "lucide-react";

interface NextBtnProps {
  onNext: () => void;
  disabled: boolean;
}

export const NextBtn: React.FC<NextBtnProps> = ({
  onNext,
  disabled = false,
}) => {
  return (
    <button
      className="btn btn-primary btn-circle btn-soft"
      onClick={onNext}
      disabled={disabled}
    >
      <ArrowRight />
    </button>
  );
};
