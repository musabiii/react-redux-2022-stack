import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ghState {
  favourits: string[];
}

const initialState: ghState = {
  favourits: JSON.parse(localStorage.getItem("rfk") ?? "[]"),
};

export const ghSlice = createSlice({
  name: "github",
  initialState,

  reducers: {
    addFavourits(state, action: PayloadAction<string>) {
      state.favourits.push(action.payload);
      localStorage.setItem("rfk", JSON.stringify(state.favourits));
    },
    removeFavourits(state, action: PayloadAction<string>) {
      state.favourits = state.favourits.filter((el) => el !== action.payload);
    },
  },
});

export const ghActions = ghSlice.actions;
export const ghReducer = ghSlice.reducer;
