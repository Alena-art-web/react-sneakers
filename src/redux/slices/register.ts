import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "../../axios"
import { User } from "../../@types"
import { RootState } from "../store"


type RegisterState = {
    data: null | User
    status: 'loading' | 'success' | 'error'
}

const initialState: RegisterState = {
    data: null,
    status: 'loading'
}

export const fetchRegister = createAsyncThunk(
    'reg/fetchRegStatus',
    async (value: User) => {

        const { data } = await axios.post(
            `/auth/register`, value
        )
        return data
    }
)


export const registerSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchRegister.rejected, (state) => {
            state.status = 'error'
            state.data = null
        })
    }


})

export const selectCurrentUserReg = (state: RootState) => state.reg.data

export default registerSlice.reducer




