import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll"

export default function Layout({children}) {
  return (
    <SmoothScroll>
      <Navbar />
        {children}
      <Footer />
    </SmoothScroll>
  );
}
