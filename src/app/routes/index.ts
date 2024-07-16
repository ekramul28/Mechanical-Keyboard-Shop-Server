import { Router } from "express";
import { CartRoute } from "../modules/cart/cart.routes";
import { PaymentRoutes } from "../modules/payment/payment.route";
import { UserRoutes } from "../modules/user/user.route";
import { ProductRoutes } from "../modules/product/product.route";
import { AuthRoutes } from "../modules/Auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/cart",
    route: CartRoute,
  },
  {
    path: "/Create-checkout-session",
    route: PaymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
