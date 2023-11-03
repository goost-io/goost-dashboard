import {createSlice} from "@reduxjs/toolkit";
import {offerRequestList} from "@/redux/offer-request/offer-request.list";

export const initialState = {
    offerRequests: [],
    loading: false,
    error: null,
    success: null,
}

export const offerRequestSlice = createSlice({
    name: 'offerRequest',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(offerRequestList.fulfilled, (state, action) => {
            state.offerRequests = action.payload.data;
            state.loading = false;
        });
        builder.addCase(offerRequestList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(offerRequestList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});