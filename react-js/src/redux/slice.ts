import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value -= 1;
    },
  },
});

export const { addItem, removeItem } = addToCartSlice.actions;
export default addToCartSlice.reducer;
