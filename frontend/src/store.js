import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice'



const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

// const middleware = [thunk]
// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
// const initialState = []

const store = configureStore({
    reducer: rootReducer,
    // middleware: [thunk]
})



export default store