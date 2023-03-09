import { createSlice } from "@reduxjs/toolkit";

const initial = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initial,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload.a;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
