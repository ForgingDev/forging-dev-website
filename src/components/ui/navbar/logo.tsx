import { motion } from "framer-motion";
import { CodeIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  variants: {
    hidden: {
      opacity: number;
      y: number;
    };
    visible: {
      opacity: number;
      y: number;
    };
  };
};

const Logo = ({ variants }: Props) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="z-50 flex items-center gap-2"
    >
      <Link
        href="/"
        className="flex items-center gap-2"
        aria-label="Forging Dev - Home"
      >
        <div className="from-forge-secondary/80 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br to-purple-500/80 shadow-lg">
          <CodeIcon className="h-4 w-4 text-white" />
        </div>
        <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-xl font-bold text-transparent">
          Forging Dev
        </span>
      </Link>
    </motion.div>
  );
};

export default Logo;
