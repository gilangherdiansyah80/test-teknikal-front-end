import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name_product, price, stok } = action.payload;
      const excitingProduct = state.products.find((p) => p.id === id);
      if (excitingProduct) {
        excitingProduct.name_product = name_product;
        excitingProduct.price = price;
        excitingProduct.stok = stok;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.find((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  ProductSlice.actions;
export default ProductSlice.reducer;
