import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    inputText: "",
    allProducts: [],
    filteredProducts: [],
    category: "ALL",
    price: 0,
  },
  reducers: {
    initializeProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    onInputChange: (state, action) => {
      state.inputText = action.payload;
    },
    onCategoryChange: (state, action) => {
      state.category = action.payload;
    },
    onPriceChange: (state, action) => {
      state.price = action.payload;
    },
    onFilter: (state, action) => {
      state.filteredProducts = action.payload;
    },

  },
});

export const {
  initializeProducts,
  onInputChange,
  onCategoryChange,
  onPriceChange,
  onFilter
} = productSlice.actions;
export default productSlice.reducer;
