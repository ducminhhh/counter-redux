import { createSelector, createSlice } from "@reduxjs/toolkit";

const name = "counter";
const initialState = {
    defaultNumber: 0
}


const counterSlice = createSlice({
    name,
    initialState,
    reducers: {

    },
});

/* Định nghĩa selector */

const selector = (state) => state[name]; /* mặc định có */
const number = createSelector(selector, ({ defaultNumber }) => defaultNumber);
export const counterSelectors = { number };

/* Định nghĩa reducer ( action ) */
const { } = counterSlice.actions;
export const counterActions = {};
export default counterSlice.reducer;
