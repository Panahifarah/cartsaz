import { Navigate } from "react-router-dom";
import AuthPage from "../../pages/Auth/AuthPage";
import LoginPage from "../../pages/Auth/Login/LoginPage";
import RegisterPage from "../../pages/Auth/Register/RegisterPage";
import Dashboard from "../../pages/Dashboard/DashboardPage";
import ProfilePage from "../../pages/Dashboard/Profile/ProfilePage";
import HomePage from "../../pages/Dashboard/Home/HomePage";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import CardPage from "../../pages/Dashboard/Card/CardPage";
import ProductPage from "../../pages/Dashboard/Product/ProductPage";
import AddProductPage from "../../pages/Dashboard/Product/AddProduct/AddProductPage";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";
import VitrinPage from "../../pages/Vitrin/VitrinPage";
import IndexPage from "../../pages/Index/IndexPage";

const authRoutes = [
  { path: "auth", element: <AuthPage /> },
  { path: "auth/login", element: <LoginPage /> },
  { path: "login", element: <Navigate to="/auth/login" replace /> },
  { path: "auth/register", element: <RegisterPage /> },
  { path: "register", element: <Navigate to="/auth/register" replace /> },
];

const dashboardRoutes = [
  { path: "dashboard", element: <Dashboard /> },

  { path: "dashboard/card", element: <CardPage /> },
  { path: "card", element: <Navigate to="/dashboard/card" replace /> },

  { path: "dashboard/add-card", element: <CardPage /> },
  { path: "add-card", element: <Navigate to="/dashboard/add-card" replace /> },

  { path: "dashboard/card-details", element: <CardPage /> },
  {
    path: "card-details",
    element: <Navigate to="/dashboard/card-details" replace />,
  },

  { path: "dashboard/home", element: <HomePage /> },
  { path: "home", element: <Navigate to="/dashboard/home" replace /> },

  { path: "dashboard/product", element: <ProductPage /> },
  { path: "product", element: <Navigate to="/dashboard/product" replace /> },

  { path: "dashboard/add-product", element: <AddProductPage /> },
  {
    path: "add-product",
    element: <Navigate to="/dashboard/add-product" replace />,
  },

  { path: "dashboard/profile", element: <ProfilePage /> },
  { path: "profile", element: <Navigate to="/dashboard/profile" replace /> },
];

const mainRoutes = [
  { path: "/", element: <IndexPage /> },
  { path: "shopping-cart", element: <ShoppingCart /> },
  { path: "vitrin", element: <VitrinPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export const routes = [...authRoutes, ...dashboardRoutes, ...mainRoutes];
