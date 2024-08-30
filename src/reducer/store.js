import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import categorySlice from "./slice/categorySlice";
import seacrhSlice from "./slice/seacrhSlice";

const store = configureStore({

    reducer:{
        cart: cartSlice,
        category : categorySlice, 
        search : seacrhSlice,
    },
})


export default store;