import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import  goodsReducer  from "./slices/goods"
import authReducer from "./slices/auth"
import regReducer from "./slices/register"

export const store = configureStore({
    reducer: {
        goods: goodsReducer,
        auth: authReducer,
        reg: regReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()