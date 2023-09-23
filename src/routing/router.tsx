import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import App from "../App";
import HomePage from "../pages/HomePage";
import GameDetailsPage from "../pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "games/1", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
