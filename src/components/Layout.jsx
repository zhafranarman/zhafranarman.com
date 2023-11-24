import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll"
import Grain from "./Grain"

export default function Layout() {
  return (
    <SmoothScroll>
      <Grain />
      <Navbar />
      <Outlet />
      <Footer />
    </SmoothScroll>
  );
}
