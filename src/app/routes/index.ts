import { Router } from "express";
import { CartRoute } from "../modules/cart/cart.routes";
import { ProductRoutes } from "../modules/product/product.route";
import { PaymentRoutes } from "../modules/payment/payment.route";

const router = Router();

const moduleRoutes = [
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
