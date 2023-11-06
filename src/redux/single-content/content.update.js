import {createAsyncThunk} from "@reduxjs/toolkit";
import {create, update} from "@/redux/single-content/content.gateway";

export const singleContentUpdate = createAsyncThunk("content/singleContentUpdate", async (data, {rejectWithValue}) => {
    return await update(data);
});