import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productValidatorSchema } from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.get("/", ProductControllers.getAllProduct);
router.get("/:id", ProductControllers.getSingleProduct);

export const ProductRoutes = router;
