import { createSlice } from "@reduxjs/toolkit";
const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (cartItems, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: cartItems,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productItem, orderCount } = action.payload;
      const newItem = productItem;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (orderCount === 1) {
        state.totalQuantity++;
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
      } else if (orderCount > 1) {
        const prevTotalQuantity = state.totalQuantity;
        state.totalQuantity = prevTotalQuantity + orderCount;
        if (!existingItem) {
          state.cartItems.push({
            id: newItem.id,
            title: newItem.title,
            price: newItem.price,
            image: newItem.image,
            totalPrice: newItem.price * orderCount,
            quantity: orderCount,
          });
        } else {
          const prevExistingItemQuantity = existingItem.quantity;
          existingItem.quantity = prevExistingItemQuantity + orderCount;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) +
            Number(newItem.price) * orderCount;
        }
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      }
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    clearCart: (state) => {
      (state.cartItems = []),
        (state.totalAmount = 0),
        (state.totalQuantity = 0);

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id == itemIdToRemove
      );

      if (state.cartItems.length === 1 && existingItemIndex.length !== -1) {
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

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
