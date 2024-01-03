// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            // its okay to do this because immer makes it work
            // under the hood
            state.value++;
        },

        amountAdded(state, action:PayloadAction<number>) {
            state.value += action.payload;
        }
    }
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
