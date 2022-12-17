import { RouteObject } from "react-router-dom";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import NotFound from "./pages/NotFound";
import Series from "./pages/Series";

const router: RouteObject[] = [
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/comics",
    element: <Comics />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
