import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    fav:[]
    
}
export const product = createSlice({
  name: "Products",
  initialState,
  reducers: {
    favouriteProduct: (state, action) => {
      return action.payload;
    },
    addFavourite: (state, action) => {
      state.push(action.payload);
    },
    removeFavourite: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});
export const { favouriteProduct,addFavourite, removeFavourite } = product.actions;
export default product.reducer;
