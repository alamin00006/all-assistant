import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import LayOut from "../Main/LayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
