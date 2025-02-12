import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ExperiencePage from "../pages/Experience";
import ProjectsPage from "../pages/Projects"; 
import StartingCareerInWebDesignPage from "../pages/blogs/starting-a-career-in-web-design"
import CreateLandingPage from "../pages/blogs/create-a-landing-page-that-performs-great"
import HowCanDesignersPrepareForTheFuture from "../pages/blogs/how-can-designers-prepare-for-the-future"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
  },
  {
    path: "starting-a-career-in-web-design",
    element: <StartingCareerInWebDesignPage />
  },
  {
    path: "create-a-landing-page-that-performs-great",
    element: <CreateLandingPage />
  },
  {
    path: "how-can-designers-prepare-for-the-future",
    element: <HowCanDesignersPrepareForTheFuture />
  }
]);

export default router;
