import {createSlice} from "@reduxjs/toolkit";
import {languageList} from "@/redux/types/language/language.list";

export const initialState = {
    languages: [],
    loading: false,
    error: null,
    success: null,
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(languageList.fulfilled, (state, action) => {
            state.languages = action.payload.data;
            state.loading = false;
        });
        builder.addCase(languageList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(languageList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});