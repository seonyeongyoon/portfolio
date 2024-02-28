import RootLayout from "./../layout/RootLayout";
import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Work from "./../pages/Work";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
    </Route>
  )
)

export default router
