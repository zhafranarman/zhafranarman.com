import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll"
import Grain from "./Grain"
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <SmoothScroll>
      <Grain/>
      <Navbar />
        <Outlet/>
        <ScrollToTop/>
      <Footer />
    </SmoothScroll>
  );
}
