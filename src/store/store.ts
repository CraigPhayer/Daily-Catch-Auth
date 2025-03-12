"use client";

import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const persistConfig = {
    key: 'auth', // key for local storage
    storage, //local storage
};

const persistedReducer = persistReducer(persistConfig, authReducer); // Wrap authReducer

export const store = configureStore({
    reducer: {
        auth: persistedReducer, // handles auth state
    },
    // configure the Redux store to ignore Redux Persist's internal action types
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store); // for Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;