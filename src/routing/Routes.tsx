import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
