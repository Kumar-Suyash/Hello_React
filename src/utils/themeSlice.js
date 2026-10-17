import { createSlice } from "@reduxjs/toolkit";

//* all themes the app supports
//* "default" = the dark theme already written in index.css
//* swatch = [background, accent] colours shown in the theme switcher
export const THEMES = [
  {
    id: "default",
    label: "Default",
    description: "Dark with amber accents",
    swatch: ["#0f1115", "#ffb84d"],
  },
  {
    id: "zomato",
    label: "Zomato",
    description: "White with Zomato red",
    swatch: ["#ffffff", "#e23744"],
  },
  {
    id: "swiggy",
    label: "Swiggy",
    description: "White with Swiggy orange",
    swatch: ["#ffffff", "#fc8019"],
  },
];

//* read the last chosen theme so a page refresh keeps it
//* (try/catch because localStorage can be blocked by the browser)
const getSavedTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    return THEMES.some((theme) => theme.id === saved) ? saved : "default";
  } catch {
    return "default";
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getSavedTheme(),
  },
  reducers: {
    setTheme: (state, action) => {
      //* action.payload is the theme id, e.g. "zomato"
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
