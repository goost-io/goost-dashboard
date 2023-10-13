import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "@/redux/auth/loginUser";

const initialState = {
    data: null,
    loading: false,
    error: null,
    success: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.data = action.payload;
            localStorage.setItem("token", action.payload.access_token);
            state.loading = false;
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});