import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartfromLS } from '../../utils/getCartFromLS';
import { RootState } from '../store'


export type CartItem = {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    count: number;
    
}

type InitialStateType ={
    items: CartItem[];
    totalPrice: number;
}
const data = getCartfromLS()
const initialState: InitialStateType = {
    items: data.items,
    totalPrice: data.totalPrice
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(obj => obj._id === action.payload._id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((a, b) => a + b.price, 0)
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(obj => obj._id !== action.payload)
            state.totalPrice = state.items.reduce((a, b) => a + b.price, 0) //??
        },
        clear: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const getCartItem = (state: RootState) => state.cart
export const {addItem, removeItem, clear} = cartSlice.actions

export default cartSlice.reducer