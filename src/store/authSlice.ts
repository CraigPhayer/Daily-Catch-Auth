"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: string | null; // store email
}

const initialState: AuthState = {
    user: null, // default state, no user is logged in
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.user = action.payload; // stores users email while logged in
        },
        logout(state) {
            state.user = null; // removes users email when logged out
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;