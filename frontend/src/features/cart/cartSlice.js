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
    'cart/addItem',
    // ({productId, qty}) => {
    //     console.log(productId, qty)
    // }
    async ({productId, qty}) => {
        const response = await axios.get(`/api/products/${productId}`)
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
        .addCase(addItemToCart.fulfilled, (state, action) => {
            let item = action.payload
            const existItem = state.entities.find(x => x.id === item._id)

            if (existItem) {
                const something = state.entities.map(x => 
                    x.id === existItem.id ? item : x
                )
            } else {
                // return original state, entities, and add the new item into the array
            }

            // let payload = {
            //     product: data._id,
            //     name: data.name,
            //     image: data.image,
            //     countInStock: data.countInStock,
            //     qty: 1
            // }
            // console.log(payload)
            state.status = 'fulfilled'
            // console.log(action.payload._id)
        })
        .addCase(addItemToCart.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export default cartSlice.reducer
// export const { addItemToCart } = cartSlice.actions