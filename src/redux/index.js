import { configureStore } from "@reduxjs/toolkit";
import collectReducer from './collector/reducer';

export const store=configureStore({
    reducer: {
        collector: collectReducer,
    },
})