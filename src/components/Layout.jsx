import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll"
import Grain from "./Grain"

export default function Layout({ children }) {
  return (
    <SmoothScroll>
      <Grain />
      {/* <Navbar /> */}
      <AnimatePresence>
        {children}
      </AnimatePresence>
      {/* <Footer /> */}
    </SmoothScroll>
  );
}
