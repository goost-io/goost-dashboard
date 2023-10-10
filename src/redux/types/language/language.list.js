import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "@/redux/types/language/language.gateway";

export const languageList = createAsyncThunk
("types/languageList", async () => {
    return await getAll();
});
