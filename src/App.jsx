import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, ScrollRestoration} from "react-router-dom"

import Home from "./pages/home/Index"
import About from "./pages/about/Index"
import Layout from "./components/Layout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
