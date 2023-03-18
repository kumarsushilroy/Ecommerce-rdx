
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'


const store = configureStore({

  reducer:{
    Cart: cartReducer
  }
})

export default store;