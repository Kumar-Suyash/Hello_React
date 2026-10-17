import { createSlice } from "@reduxjs/toolkit";

//* API prices are in paise, so divide by 100 to get rupees
export const getItemPrice = (item) =>
  (item.price || item.defaultPrice || 0) / 100;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //* each item is { ...itemInfo, quantity }
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //* mutating the state here (Immer handles immutability for us)
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
