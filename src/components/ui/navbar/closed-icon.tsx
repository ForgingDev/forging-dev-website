import { motion } from "framer-motion";
import { X } from "lucide-react";

const ClosedIcon = () => {
  return (
    <motion.div
      key="close-icon"
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <X className="size-5 text-white" />
    </motion.div>
  );
};

export default ClosedIcon;
