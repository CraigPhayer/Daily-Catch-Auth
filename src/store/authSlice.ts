"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: string | null;
    email: string;
    password: string;
    error: string | null;
}

const initialState: AuthState = {
    // default state, no user is logged in
    user: null,
    email: "",
    password: "",
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        login(state, action: PayloadAction<string>) {
            state.user = action.payload; // stores users email while logged in
            localStorage.setItem("user", action.payload);
            state.error = null;
        },
        logout(state) {
            state.user = null; // removes users email when logged out
            state.error = null;
            state.email = "";
            state.password = "";
            localStorage.removeItem("user");
        },
    },
});

export const { setEmail, setPassword, setError, login, logout } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const authReducer = authSlice.reducer;