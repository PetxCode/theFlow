import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ReadGoalsPage from "../pages/ReadGoalsPage";
import CreateGoalPage from "../pages/CreateGoalPage";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ReadGoalsPage />,
      },
      {
        index: true,
        path: "create",
        element: <CreateGoalPage />,
      },
    ],
  },
]);
