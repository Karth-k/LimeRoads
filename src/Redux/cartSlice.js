import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      const existingProduct = state.find(item => item.id === id && item.selectedSize === selectedSize);
    
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    
      localStorage.setItem("cart", JSON.stringify(state));
    },
    
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    updateQuantity: (state, action) => {
      const { id, selectedSize, quantity } = action.payload;
      const product = state.find(item => item.id === id && item.selectedSize === selectedSize);
      if (product) {
        product.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const cartTotal = (state) => state.cart.reduce((total, item) => total + item.quantity, 0);
export default cartSlice.reducer;
