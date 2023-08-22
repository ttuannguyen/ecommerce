import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    // regular fetch
    // () => {
    //     return fetch('/api/products/')
    //     .then(res => res.json())
    //     .then(data => data)
    // }
    // async / await fetch

    async () => {
        const fetchProducts = () => {
            axios
                .get('/api/products/')
                .then(data => console.log(data))
        }
        const response = await fetchProducts()
        return response
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
        .addCase(fetchProductsAsync.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = 'fullfilled'
            state.toogle = true
        })
    }
})

export const { doSomething } = productsSlice.actions
export default productsSlice.reducer