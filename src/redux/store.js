import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import layoutReducer from "./layout/layout.slice";

const middlewares = [];

if(process.env.NODE_ENV === "development")
    middlewares.push(logger);

export const store = configureStore({
    reducer: {
        layout: layoutReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === "development"
})