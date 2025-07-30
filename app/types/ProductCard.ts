// types/Product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  reviews: {
    rating: number;
    comment: string;
  }[];
}
