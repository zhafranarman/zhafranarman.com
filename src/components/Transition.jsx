import { cubicBezier, motion as m } from "framer-motion"

export default function Transition({ children, long = false }) {
  return (
    <m.main 
      className="main-content" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ 
        duration: 1.25, 
        delay: long ? 0.5 : 0.25, 
        ease: cubicBezier(0.4, 0, 0.2, 1) 
      }}>
      {children}
    </m.main>
  );
}
