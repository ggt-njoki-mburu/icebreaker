import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface NextBtnProps {
  onNext: () => void;
  disabled: boolean;
}

export const NextBtn: React.FC<NextBtnProps> = ({
  onNext,
  disabled = false,
}) => {
  return (
    <div className="tooltip" data-tip="Next question">
      <motion.button
        className="btn btn-primary btn-circle btn-soft"
        onClick={onNext}
        disabled={disabled}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: [1, 0.92, 1.02] }}
        transition={{ type: "spring", stiffness: 500, damping: 24 }}
      >
        <ArrowLeft />
      </motion.button>
    </div>
  );
};
