import { Product } from "./product.model";

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
export const ProductServices = {
  getAllProductFromDB,
  getSingleProductFromDB,
};
