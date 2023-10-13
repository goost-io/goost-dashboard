import {createAsyncThunk} from "@reduxjs/toolkit";
import {create} from "@/redux/auth/auth.gateway";
import {string} from "prop-types";
import axios from "axios";
import {routesV1} from "@/redux/routes";

async function postData({ email, password }: User) {
    return await axios({
        method: "POST",
        url:
            process.env.REACT_APP_BASE_BACKEND +
            routesV1.version +
            routesV1.auth.login,

        data: {
            email: email,
            password: password,
        },
        headers: {
            "Content-type": "application/json",
        },
    });
}
export interface User {
    email: string;
    password: string;
}
export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }: User, { rejectWithValue }) => {
        const response = await postData({ email, password });
        if (response.status !== 200) {
            return rejectWithValue("Error");
        }
        return response.data;
    }
);