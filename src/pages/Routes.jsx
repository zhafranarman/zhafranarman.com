import React from "react";
import { Route, Routes,} from "react-router-dom";
import Home from "./home/Index.jsx";
import About from "./about/Index.jsx";



const RoutesList = () => {

  return (
    <>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </>
  )
}

export default RoutesList