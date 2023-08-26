import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        action(state, action) {
            console.log('hello redux')
        }
    }
})

export default cartSlice.reducer