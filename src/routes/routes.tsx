import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { PLP } from "../pages/PLP";
import { PDP } from "../pages/PDP";
import { Cart } from "../pages/Cart";
import { courses } from "../utils/data";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/PLP",
    element: <PLP />,
  },
  {
    path: "/PDP",
    element: <PDP courses={courses} />,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
]);
