import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    entities: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})


export default userSlice.reducer