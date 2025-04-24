import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
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

const ContactButton = ({ variants }: Props) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        type="button"
        asChild
        className="from-forge-secondary shadow-forge-secondary/20 hover:shadow-forge-secondary/40 relative border-none bg-gradient-to-r to-blue-600 px-8 py-6 text-lg text-white shadow-lg"
      >
        <Link
          href="/#contact"
          role="menuitem"
          aria-label="Contact us"
          className="relative z-10 flex items-center"
        >
          Let&apos;s Talk{" "}
          <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />
          <span className="absolute inset-0 rounded-md bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
        </Link>
      </Button>
    </motion.div>
  );
};

export default ContactButton;
