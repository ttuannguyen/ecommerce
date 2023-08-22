import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    entities: []
}

export const listProductsAsync = createAsyncThunk(
    'products/fetchProducts',

    async () => {
        const response = await axios.get('/api/products/')
        return response.data
    }

    // async () => {
    //     const listProducts = () => {
    //         axios
    //             .get('/api/products/')
    //             .then(res => res)
    //     }
    //     const response = await listProducts()
    //     return response
    // }
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
        .addCase(listProductsAsync.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(listProductsAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = 'fullfilled'
            state.toogle = true
        })
        .addCase(listProductsAsync.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }
})

export const { doSomething } = productsSlice.actions
export default productsSlice.reducer