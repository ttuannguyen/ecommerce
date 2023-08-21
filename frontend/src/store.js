import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';




const reducer = combineReducers({
    
})

const store = configureStore({
    // reducer: rootReducer
    middleware: [thunk]
})



export default store