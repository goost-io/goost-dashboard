import {createAsyncThunk} from "@reduxjs/toolkit";
import {create} from "@/redux/types/language/language.gateway";

export const languageCreate = createAsyncThunk("types/languageCreate", async (data, {rejectWithValue}) => {
    return await create(data);
});