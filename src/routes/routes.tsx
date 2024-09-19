import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Courses } from "../pages/Courses";
import { courses } from "../utils/data";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/course",
    element: <Courses courses={courses} />,
  },
]);
