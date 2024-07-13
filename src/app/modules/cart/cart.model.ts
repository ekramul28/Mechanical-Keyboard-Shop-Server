import { model, Schema } from "mongoose";
import { TCart } from "./cart.interface";

const cartSchema = new Schema<TCart>({
  product: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: "Product",
  },
  productQuantity: {
    type: Number,
  },
  email: {
    type: String,
  },
});

export const Cart = model("Cart", cartSchema);
