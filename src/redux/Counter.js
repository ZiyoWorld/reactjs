import { createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { data: 0 },
    reducers: {
        increment: (state) => {
            state.data += 1;
        },
        decrement: (state, action) => {
            state.data -= action.payload.a;
        }
    }
});

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
