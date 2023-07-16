import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    clearCart: (state) => {
      (state.cartItems = []), (totalAmount = 0), (totalQuantity = 0);
    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id == itemIdToRemove
      );

      if (state.cartItems.length === 1 && existingItem.length !== -1) {
        state.totalAmount = 0;
        state.totalQuantity = 0;
        state.cartItems = [];
      } else {
        state.cartItems.splice(existingItemIndex, 1);
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + Number(item.quantity),
          0
        );
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      }
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
