import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";

const addProductFromDB = async (payload: TCart) => {
  const isCardProductExist = await Cart.find({ product: payload.product });

  if (isCardProductExist && isCardProductExist.length > 0) {
    throw new AppError(httpStatus.BAD_REQUEST, " already added!");
  }
  const result = await Cart.create(payload);
  return result;
};
const getProductFromDB = async (email: string) => {
  const result = await Cart.find({ email }).populate("product");
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Cart.findByIdAndDelete(id);
  return result;
};

const updateProductFromDB = async (data: object, id: string) => {
  const result = await Cart.findByIdAndUpdate(id, data, { new: true });
  return result;
};
export const CartServices = {
  addProductFromDB,
  getProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
