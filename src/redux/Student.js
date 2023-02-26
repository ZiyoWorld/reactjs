import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getStudent = createAsyncThunk(
    'getStudent',
    async (payload) => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json());
    }
)
export const studentSlice = createSlice({
    name: 'counter',
    initialState: { student: [], status: '' },
    extraReducers: {
        [getStudent.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getStudent.fulfilled]: (state, action) => {
            state.status = 'success';
            state.student = action.payload;
        },
        [getStudent.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }

});


export default studentSlice.reducer;
