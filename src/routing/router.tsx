import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import App from "../App";
import HomePage from "../pages/HomePage";
import GameDetailsPage from "../pages/GameDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
