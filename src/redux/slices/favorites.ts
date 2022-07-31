import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartfromLS } from '../../utils/getCartFromLS';
import { getFavfromLS } from '../../utils/getFavFromLS ';
import { RootState } from '../store'


export type FavoriteItem = {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    count: number;

}

type InitialStateType = {
    data: FavoriteItem[];
}

const itemsFav = getFavfromLS()
const initialState: InitialStateType = {
    data: itemsFav.items
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addtoFav: (state, action: PayloadAction<FavoriteItem>) => {
            const findItem = state.data.find(obj => obj._id === action.payload._id)

            if (findItem) {
                findItem.count++
            } else {
                state.data.push({
                    ...action.payload,
                    count: 1
                })
            }
            
        },
        removeFav: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(obj => obj._id !== action.payload)
        },
        clearFav: (state) => {
            state.data = []
        }
    }
})

export const getFavoriteItem = (state: RootState) => state.favorites
export const { addtoFav, removeFav, clearFav } = favoritesSlice.actions

export default favoritesSlice.reducer