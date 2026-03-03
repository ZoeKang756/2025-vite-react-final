import { createHashRouter } from "react-router";
import Home from "./pages/front/Home";
import Products from "./pages/front/Products";
import NotFound from "./pages/front/NotFound";
import FrontendLayout from "./layout/FrontendLayout";
import SingleProduct from "./pages/front/SingleProduct";
import Cart from "./pages/front/Cart";
import AdminLayout from "./layout/AdminLayout";
import ProductList from "./pages/backend/ProductList";
import LoginForm from "./pages/backend/LoginForm";
import Orders from "./pages/front/Orders";
import SingleOrder from "./pages/front/SingleOrder";
import Shop from "./pages/front/Shop";

const router = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Orders />,
      },
      {
        path: "/order/:id",
        element: <SingleOrder/>,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/product",
        element: <ProductList />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <LoginForm />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
