import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home/Index.jsx";

const RoutesList = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesList