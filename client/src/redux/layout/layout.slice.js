import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    isSidebarOpen: false,
    title: ''
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState: INITAL_STATE,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        clearTitle: (state) => {
            state.title = '';
        }
    }
});

export const { toggleSidebar, setTitle, clearTitle } = layoutSlice.actions;

export default layoutSlice.reducer;