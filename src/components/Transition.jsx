import { easeInOut, easeOut, motion as m } from "framer-motion"

export default function Transition({ children }) {
  return (
    <m.main className="main-content" 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      exit={{opacity:0}} 
      transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}>
      {children}
    </m.main>
  );
}