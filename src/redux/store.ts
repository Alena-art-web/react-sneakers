import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import  goodsReducer  from "./slices/goods";

export const store = configureStore({
    reducer: {
        goods: goodsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()