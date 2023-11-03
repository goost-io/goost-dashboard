import {createSlice} from "@reduxjs/toolkit";
import {contentTypeList} from "@/redux/types/content-type/content-type.list";

export const initialState = {
    contentTypes: [],
    loading: false,
    error: null,
    success: null,
}

export const contentTypeSlice = createSlice({
    name: 'contentType',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(contentTypeList.fulfilled, (state, action) => {
            state.contentTypes = action.payload.data;
            state.loading = false;
        });
        builder.addCase(contentTypeList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(contentTypeList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});