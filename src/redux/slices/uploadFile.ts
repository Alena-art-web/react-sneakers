import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../axios"
import { File } from "../../@types"
import { RootState } from "../store"


type FileState = {
    data: File | null;
    status: 'loading' | 'success' | 'error'
}

const initialState: FileState = {
    data: null,
    status: 'loading'
}


export const fetchUploadFile = createAsyncThunk(
    'file/fetchFileStatus',
    async (value: File) => {
        
        const { data } = await axios.post( 
            `/upload`, value,
        )
        return data
    }
)


export const fileSlice = createSlice({
    name: 'uploadFile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUploadFile.pending, (state) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(fetchUploadFile.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchUploadFile.rejected, (state) => {
            state.status = 'error'
            state.data = null
        })
    }

    
})

export const selectGetFile = (state: RootState) => state.uploadFile.data


export default fileSlice.reducer




