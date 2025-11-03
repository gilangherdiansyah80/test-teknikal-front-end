import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/tamplates/MainLayout";
// import AllProducts from "../pages/AllProducts";
import AddProductPage from "../pages/AddProductPage";
import UpdateProductPage from "../pages/UpdateProductPage";
import FetchApiListPage from "../pages/FetchApiListPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "list-api", element: <FetchApiListPage /> },
      { path: "add-product/:mode", element: <AddProductPage /> },
      { path: "update-product/:mode/:id", element: <UpdateProductPage /> },
    ],
  },
]);

export default AppRouter;
