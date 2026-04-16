import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PreviousBtnProps {
  onPrevious: () => void;
  disabled?: boolean;
}

export const PreviousBtn: React.FC<PreviousBtnProps> = ({
  onPrevious,
  disabled,
}) => {
  return (
    <div className="tooltip" data-tip="Previous question">
      <motion.button
        onClick={onPrevious}
        className="btn btn-secondary btn-circle btn-soft"
        disabled={disabled}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: [1, 0.92, 1.02] }}
        transition={{ type: "spring", stiffness: 500, damping: 24 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  );
};
