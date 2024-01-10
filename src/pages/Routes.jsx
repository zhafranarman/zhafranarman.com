import { Route, Routes, useLocation, } from "react-router-dom";

import Home from "./home/Index.jsx";
import About from "./about/Index.jsx";
import Work from "./work/Index.jsx";
import ProjectPage from "./project/Index.jsx";
import NotFound from "../components/404.jsx";

const RoutesList = () => {

  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work">
        <Route index element={<Work />} />
        <Route path=":id" element={<ProjectPage />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default RoutesList