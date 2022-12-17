import { RouteObject } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import Characters from "./pages/Characters";
import ComicPage from "./pages/ComicPage";
import Comics from "./pages/Comics";
import NotFound from "./pages/NotFound";
import SerialPage from "./pages/SerialPage";
import Series from "./pages/Series";

const router: RouteObject[] = [
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/characters/:id",
    element: <CharacterPage />,
  },
  {
    path: "/comics",
    element: <Comics />,
  },
  {
    path: "/comics/:id",
    element: <ComicPage />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/series/:id",
    element: <SerialPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
