import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
const store = configureStore({
  reducer: {
    addToCart: cartReducer,
  },
});

export default store;
