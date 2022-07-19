import { configureStore } from "@reduxjs/toolkit";
import { ghApi } from "./gh/gh.api";

export const store = configureStore({
    reducer:{
        [ghApi.reducerPath]:ghApi.reducer
    }
})