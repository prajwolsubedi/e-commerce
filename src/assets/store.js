import {configureStore, createSlice} from "@reduxjs/toolkit"
import productSlice from "./ProductSlice";
import cartSlice from "./cartSlice"



const store = configureStore({
    reducer: {
        product : productSlice,
        cart : cartSlice,
    }
})

export default store;
