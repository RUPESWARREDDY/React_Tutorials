import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
    users: [],
    status: '',
    error: false
};

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState: initialData,
    reducers: {},
    extraReducers: (rr) => {
     
        rr
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'completed';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'error';
                state.users = [];
                state.error = action.error.message;
            });
    }
});

const store1 = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store1;
