import { getStorage, saveStorage } from "@/components/helpers";
import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    value: getStorage("cart") || [],
  },
  reducers: {
    addCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.value[itemIndex].quantity += action.payload.quantity;
      } else {
        state.value.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      saveStorage("cart", state.value);
    },

    removeCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      saveStorage("cart", state.value);
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0 && state.value[itemIndex].quantity > 1) {
        state.value[itemIndex].quantity -= 1;
      } else {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      }
      saveStorage("cart", state.value);
    },

    clearCart: (state) => {
      state.value = [];
      saveStorage("cart", state.value);
    },
  },
});

export const { addCart, removeCart, decreaseQuantity, clearCart } =
  cart.actions;
export default cart.reducer;
