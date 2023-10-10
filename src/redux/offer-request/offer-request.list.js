import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "@/redux/offer-request/offer-request.gateway";

export const offerRequestList = createAsyncThunk
("offerRequest/offerRequestList", async () => {
    return await getAll();
});