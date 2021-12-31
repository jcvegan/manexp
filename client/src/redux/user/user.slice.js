import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { 
    currentUser: null,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.error = null;
        },
        signOutSuccess: (state) => {
            state.currentUser = null;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.currentUser = null;
            state.error = action.payload;
        },
        signOutFailure: (state, action) => {
            state.currentUser = null;
            state.error = action.payload;
        },
        signUpFailure: (state, action) => {
            state.currentUser = null;
            state.error = action.payload;
        }
    }
});

export const { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure } = userSlice.actions;

export default userSlice.reducer;