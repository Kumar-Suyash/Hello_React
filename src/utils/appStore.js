import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default appStore;
