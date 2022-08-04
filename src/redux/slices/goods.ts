import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios';
import { Item } from '../../@types'


type StateType = {
    items: Item[];
    status: 'loading' | 'success' | 'error';

}

const initialState: StateType = {
    items: [],
    status: 'loading'
}

export const fetchGoods = createAsyncThunk<Item[], Record<string, string>>(
    'goods/fetchGoodsStatus',
    async () => {
        const { data } = await axios.get<Item[]>(
            `/goods`//http://localhost:4444
        )
        return data
    }
)


export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        getGoods: (state, actions: PayloadAction<Item[]>) => {
            state.items = actions.payload
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGoods.pending, (state, action) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(fetchGoods.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchGoods.rejected, (state) => {
            state.status = 'error'
            state.items = []
        })
    }
})


export const { getGoods } = goodsSlice.actions

export default goodsSlice.reducer

