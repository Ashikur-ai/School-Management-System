import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/clientSide/homePage/HomePage";
import MainLayout from "../layouts/MainLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
])

export default routers;