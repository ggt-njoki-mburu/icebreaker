import { motion } from "motion/react";

interface RandomBtnProps {
  onRandom: () => void;
}

export const RandomBtn: React.FC<RandomBtnProps> = ({ onRandom }) => {
  return (
    <div className="tooltip" data-tip="Select random questions.">
      <motion.button
        onClick={onRandom}
        className="btn btn-info btn-circle btn-soft btn-lg text-2xl"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: [1, 0.92, 1.02] }}
        transition={{ type: "spring", stiffness: 500, damping: 24 }}
      >
        🎲
      </motion.button>
    </div>
  );
};
