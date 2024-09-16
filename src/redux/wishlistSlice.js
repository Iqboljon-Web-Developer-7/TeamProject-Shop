import { getStorage, saveStorage } from "@/components/helpers";
import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    value: getStorage("wishlist") || [],
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id,
        saveStorage("wishlist", state.value)
      );

      if (itemIndex === -1) {
        state.value.push(action.payload);
        saveStorage("wishlist", state.value);
      } else {
        state.value.splice(itemIndex, 1);
        saveStorage("wishlist", state.value);
      }
    },
    clearWishlist: (state) => {
      state.value = [];
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlist.actions;
export default wishlist.reducer;
