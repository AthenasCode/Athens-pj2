import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { PLP } from "../pages/PLP";
import { PDP } from "../pages/PDP";
import { Cart } from "../pages/Cart";
import { courses } from "../utils/data";

export const router = createBrowserRouter([
  {
    path: "/Athens-pj2/",
    element: <Home />,
  },
  {
    path: "/Athens-pj2/PLP",
    element: <PLP />,
  },
  {
    path: "/Athens-pj2/PDP",
    element: <PDP courses={courses} />,
  },
  {
    path: "/Athens-pj2/Cart",
    element: <Cart/>,
  },
]);
