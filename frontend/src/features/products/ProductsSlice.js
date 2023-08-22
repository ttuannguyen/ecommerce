import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const productsSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        doSomething(state) {
            //do something
        }
    }
})

export const { doSomething } = productsSlice.actions
export default productsSlice.reducer