import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    entities: [],
    errors: null,
    status: 'idle',
}

export const listProductsAsync = createAsyncThunk(
    'products/fetchProducts',

    async () => {
        const response = await axios.get('/ap/products/')
        return response.data
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        doSomething(state, action) {
            //do something
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(listProductsAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(listProductsAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = 'fulfilled'
            state.toogle = true
        })
        .addCase(listProductsAsync.rejected, (state, action) => {
            state.status = 'rejected'
            state.errors = action.error.message
        })
    }
})

export const { doSomething } = productsSlice.actions
export default productsSlice.reducer