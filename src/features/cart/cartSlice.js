import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../../cartItems";

const initialState = {
  cartItems: CartItems,
  amount: 6, //item count for the specific product
  total: 0,
  isLoading: true,
};

const cartSlice =  createSlice({
	name: 'cart',
	initialState,
})


export default cartSlice.reducer;