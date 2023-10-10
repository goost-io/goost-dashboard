import {createAsyncThunk} from "@reduxjs/toolkit";
import {create} from "@/redux/types/content-type/content-type.gateway";

export const contentTypeCreate = createAsyncThunk("types/contentTypeCreate", async (data, { rejectWithValue }) => {
    return await create(data);
});