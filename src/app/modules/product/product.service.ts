import QueryBuilder from "../../builder/QueryBuilder";
import { Product } from "./product.model";

const ProductSearchableFields = [
  "title",
  "rating",
  "price",
  "brand",
  "keyboardType",
  "description",
  "offer",
];

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
export const ProductServices = {
  getAllProductFromDB,
  getSingleProductFromDB,
};
