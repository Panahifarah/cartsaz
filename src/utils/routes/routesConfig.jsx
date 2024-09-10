import { Navigate } from "react-router-dom";
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
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import EmailVerification from "../../pages/Auth/EmailVerification/EmailVerification";

const authRoutes = [
  { path: "auth/signin", element: <SignIn /> },
  { path: "auth/login", element: <Navigate to="/auth/signin" replace /> },
  { path: "signin", element: <Navigate to="/auth/signin" replace /> },
  { path: "login", element: <Navigate to="/auth/signin" replace /> },

  { path: "auth/email-verification", element: <EmailVerification /> },
  {
    path: "email-verification",
    element: <Navigate to="/auth/email-verification" replace />,
  },

  { path: "auth/signup", element: <SignUp /> },
  { path: "auth/register", element: <Navigate to="/auth/signup" replace /> },
  { path: "signup", element: <Navigate to="/auth/signup" replace /> },
  { path: "register", element: <Navigate to="/auth/signup" replace /> },
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
