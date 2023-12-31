import { Route, Routes, useLocation, } from "react-router-dom";


import Home from "./home/Index.jsx";
import About from "./about/Index.jsx";
import Work from "./work/Index.jsx";
import ProjectPage from "./project/Index.jsx";



const RoutesList = () => {

  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<Work />} />
      <Route path="work/:id" element={<ProjectPage />} />
    </Routes>
  )
}

export default RoutesList