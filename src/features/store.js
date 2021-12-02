import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./slice/bookSlice";
import {productApi} from "./slice/apiQuery";

const store = configureStore({
    reducer: {
        books: bookReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware)
})

export default store;