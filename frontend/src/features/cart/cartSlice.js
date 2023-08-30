import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];


const initialState = {
    entities: [],
    cartItems: [],
    // cartItems: items,
    errors: null,
    status: 'idle'
}


export const addItemToCart = createAsyncThunk(
    'cart/addItemToCart',
    // ({productId, qty}) => {
    //     console.log(productId, qty)
    // }
    async ({productId, qty}) => {
        const response = await axios.get(`/api/products/${productId}`)
        const payload = {
            id: response.data._id,
            name: response.data.name,
            image: response.data.image,
            countInStock: response.data.countInStock,
            price: response.data.price,
            qty: qty
        }
        return payload
        // console.log(response.data)
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
        .addCase(addItemToCart.fulfilled, (state, action) => {
            state.status = 'fulfilled'

            const existingItem = state.cartItems.find(i => i.id === action.payload.id)

            if (!existingItem) {
                state.cartItems.push(action.payload)
            } else {
                let itemFound = state.cartItems.find(i => i.id === action.payload.id)
                itemFound = action.payload
            }
        })
        .addCase(addItemToCart.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})




export default cartSlice.reducer
// export const { addItemToCart } = cartSlice.actions