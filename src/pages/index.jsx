import { lazy } from "react";

const Cart = lazy(() => import("./Cart/index"));
const Details = lazy(() => import("./Details/index"));
const Join = lazy(() => import("./Join/index"));
const Login = lazy(() => import("./Login/index"));
const Main = lazy(() => import("./Main/index"));
const My = lazy(() => import("./My/index"));
const NotFound = lazy(() => import("./NotFound/index"));
const Outfit = lazy(() => import("./Outfit/index"));
const Product = lazy(() => import("./Product/index"));
const Review = lazy(() => import("./Review/index"));

export { Cart, Details, Join, Login, Main, My, NotFound, Outfit, Product, Review };
