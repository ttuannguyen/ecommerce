import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';




const rootReducer = combineReducers({})
const middleware = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
// const initialState = []

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})



export default store