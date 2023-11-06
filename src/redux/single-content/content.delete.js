import {createAsyncThunk} from "@reduxjs/toolkit";
import {create, deleteContent, update} from "@/redux/single-content/content.gateway";

export const singleContentDelete = createAsyncThunk("content/singleContentDelete", async (id, {rejectWithValue}) => {
    return await deleteContent(id);
});