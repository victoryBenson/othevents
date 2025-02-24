"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { ArrowUpIcon } from "@heroicons/react/24/outline"; // Using Heroicons
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show when scrolled 300px
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      whileHover={{ scale: 1.1 }}
    >
      {/* <ArrowUpIcon className="h3" /> */}
       <IoMdArrowUp className="" size={20} />
    </motion.button>
  );
};

export default ScrollToTop;
