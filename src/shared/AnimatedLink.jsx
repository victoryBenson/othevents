import React from 'react'
import {motion} from 'framer-motion';

const AnimatedLink = ({href,text}) => {
  return (
    <motion.a
    href={href}
    className="relative inline-block text-blue-600 font-semibold"
    whileHover={{ scale: 1.1 }} // Scale the link on hover
    whileTap={{ scale: 0.95 }} // Scale down when clicked
  >
    {text}
    <motion.span
      className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600"
      initial={{ scaleX: 0 }} // Start with the line hidden
      animate={{ scaleX: 1 }} // Animate to full width
      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
    />
  </motion.a>
  )
}

export default AnimatedLink