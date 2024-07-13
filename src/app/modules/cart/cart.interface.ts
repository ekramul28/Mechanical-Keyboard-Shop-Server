import { Types } from "mongoose";

export type TCart = {
  product: Types.ObjectId;
  productQuantity: number;
  email: string;
};
