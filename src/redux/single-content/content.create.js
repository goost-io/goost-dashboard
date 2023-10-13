import {createAsyncThunk} from "@reduxjs/toolkit";
import {create} from "@/redux/single-content/content.gateway";

export const singleContentCreate = createAsyncThunk("content/singleContentCreate", async (data, { rejectWithValue }) => {
    console.log("data", data);
    return await create(data);
});