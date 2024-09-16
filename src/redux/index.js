import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // caching
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
