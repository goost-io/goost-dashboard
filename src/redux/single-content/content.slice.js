import { createSlice } from "@reduxjs/toolkit";
import {contentList, singleContentList} from "@/redux/single-content/content.list";

const initialState = {
    content: [],
    loading: false,
    error: null,
    success: null,
}

export const singleContentSlice = createSlice({
    name: 'singleContent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(singleContentList.fulfilled, (state, action) => {
            state.content = action.payload;
            state.loading = false;
        });
        builder.addCase(singleContentList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(singleContentList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
    });