import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { PLP } from "../pages/PLP";
import { Cart } from "../pages/Cart";

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
    path: "/Cart",
    element: <Cart/>,
  },
]);
