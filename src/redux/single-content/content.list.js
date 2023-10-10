import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "@/redux/single-content/content.gateway";

export const singleContentList = createAsyncThunk
("content/singleContentList", async () => {
    return await getAll();
});