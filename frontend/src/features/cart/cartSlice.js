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
        // console.log(response.data)
        const payload = {
            id: response.data._id,
            name: response.data.name,
            image: response.data.image,
            countInStock: response.data.countInStock,
            price: response.data.price,
            qty: qty
        }
        return payload
    }

)


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItemFromCart(state, action) {
            // console.log(action.payload)
            const newCart = state.cartItems.filter(item => item.id !== action.payload)
            state.cartItems = newCart
        }
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
                const updatedCart = state.cartItems.map(item => item.id === action.payload.id ? action.payload : item)
                state.cartItems = updatedCart
            }
        })
        .addCase(addItemToCart.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})




export default cartSlice.reducer
export const { removeItemFromCart } = cartSlice.actions