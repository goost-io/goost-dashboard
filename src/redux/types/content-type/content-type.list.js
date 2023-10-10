import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "@/redux/types/content-type/content-type.gateway";

export const contentTypeList = createAsyncThunk
("types/contentTypeList", async () => {
    return await getAll();
});
