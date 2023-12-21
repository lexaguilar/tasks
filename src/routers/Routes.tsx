
import {
  createBrowserRouter,  
} from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import TasksPage from "../components/pages/TasksPage";
import ListPage from "../components/pages/ListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/taks",
    element: <TasksPage />
  },
  {
    path: "/list",
    element: <ListPage />
  }
]);