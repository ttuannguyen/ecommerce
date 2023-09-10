import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    entities: {},
    errors: null
}


export const login = createAsyncThunk(
    'user/fetchMe',
    async (email, password) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post(
            '/api/users/login/',
            {'username': email, 'password': password},
            config
        )
        return response.data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.status = 'loading'
            state.errors = null // reset errors at page refresh
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            if (action.payload.errors) {
                state.errors = action.payload.errors
                // state.loginErrors = action.payload.errors
            } else {
                // state.loggedIn = true
                state.errors = null
                state.entities = action.payload
            }
        })
        .addCase(login.rejected, (state) => {
            state.status = 'rejected'
        })   
    }

})


export default userSlice.reducer