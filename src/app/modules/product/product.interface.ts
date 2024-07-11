export type TProduct = {
  image: string[];
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  keyboardType: string;
  offerPrice?: number;
  offer?: boolean;
  isDeleted?: boolean;
};
