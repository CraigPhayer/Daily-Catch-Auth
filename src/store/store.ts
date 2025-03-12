"use client";

import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: 'auth', // key for local storage
    storage, //local storage
};

const persistedReducer = persistReducer(persistConfig, authReducer); // Wrap authReducer

export const store = configureStore({
    reducer: {
        auth: authReducer, // handles auth state
    },
});

export const persistor = persistStore(store); // for Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;