import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: []
}

export const addItemToCart = createAsyncThunk(
    'cart/addItem',
    async (params) => {
        const response = await axios.get(`/api/products/${params.id}`)
        return response.data
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItemToCart(state, action) {
        //     console.log('hello redux')
        //     const item = action.payload
           //     const existItem = state.entities.find(i => i.product === item.product)
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addItemToCart.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(addItemToCart.fulfilled, (state) => {
            state.status = 'fulfilled'
        })
        .addCase(addItemToCart.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export default cartSlice.reducer
// export const { addItemToCart } = cartSlice.actions