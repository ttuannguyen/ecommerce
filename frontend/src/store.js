import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middleware = [thunk]
// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
// const initialState = []


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})


export const persistor = persistStore(store)