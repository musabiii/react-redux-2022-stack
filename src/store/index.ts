import { configureStore } from "@reduxjs/toolkit";
import { ghApi } from "./gh/gh.api";
import { ghReducer } from "./gh/gh.slice";

export const store = configureStore({
  reducer: {
    [ghApi.reducerPath]: ghApi.reducer,
    github: ghReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ghApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
