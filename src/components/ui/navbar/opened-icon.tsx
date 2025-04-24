import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const OpenedIcon = () => {
  return (
    <motion.div
      key="menu-icon"
      initial={{ rotate: 90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: -90, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Menu className="size-5 text-white" />
    </motion.div>
  );
};

export default OpenedIcon;
