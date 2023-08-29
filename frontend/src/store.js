import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



// W/o Redux Persist

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],   
})


// W / Redux Persist
// const persistConfig = {
//     key: 'root',
//     storage
// }

// const reducers = combineReducers({
//     products: productsReducer,
//     cart: cartReducer
// })

// const persistedReducer = persistReducer(persistConfig, reducers)

// const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: [thunk],
// })

export default store
