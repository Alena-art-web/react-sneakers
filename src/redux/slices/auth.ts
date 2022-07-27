import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../axios"
import { User } from "../../@types"
import { RootState } from "../store"


type AuthState = {
    data: User | null;
    status: 'loading' | 'success' | 'error'
}

const initialState: AuthState = {
    data: null,
    status: 'loading'
}


export const fetchUserData = createAsyncThunk(
    'auth/fetchAuthStatus',
    async (value: User) => {
        
        const { data } = await axios.post( 
            `/auth/login`, value,
        )
        return data
    }
)

export const fetchUserGetMe = createAsyncThunk(
    'authMe/fetchAuthMeStatus',
    async () => {

        const { data } = await axios.get(
            `/auth/me`
        )
        return data
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchUserData.rejected, (state) => {
            state.status = 'error'
            state.data = null
        })
        builder.addCase(fetchUserGetMe.pending, (state) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(fetchUserGetMe.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchUserGetMe.rejected, (state) => {
            state.status = 'error'
            state.data = null
        })
    }

    
})

export const selectCurrentUser = (state: RootState) => Boolean(state.auth.data)
export const selectGetUser = (state: RootState) => state.auth.data
export const {logout} = authSlice.actions

export default authSlice.reducer




