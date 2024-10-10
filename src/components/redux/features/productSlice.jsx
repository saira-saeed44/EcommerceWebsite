import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  wishlist: [],
  search: [],
  cart: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addFavourite: (state, action) => {
      if (!state.wishlist.some((product) => product.id === action.payload.id)) {
        state.wishlist.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload.id
      );
    },
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    searchProduct: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
   
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
export const {
  setProducts,
  addFavourite,
  removeFavourite,
  incrementQuantity,
  decrementQuantity,
  addToCart,
  removeFromCart,
  clearCart, 
} = productSlice.actions;
export default productSlice.reducer;
  