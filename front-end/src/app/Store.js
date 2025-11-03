import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/products/ProductSlice";

export const Store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
