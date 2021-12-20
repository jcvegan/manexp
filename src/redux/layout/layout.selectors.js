import { createSelector } from "@reduxjs/toolkit";

const selectLayout = state => state.layout;

export const selectSidebar = createSelector(
    [selectLayout],
    layout => layout.isSidebarOpen
)

export const selectTitle = createSelector(
    [selectLayout],
    layout => layout.title
);