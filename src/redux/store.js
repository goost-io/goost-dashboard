import {offerRequestSlice} from "./offer-request//offer-request.slice";
import {singleContentSlice} from "./single-content/content.slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {languageSlice} from "./types/language/language.slice";
import {contentTypeSlice} from "./types/content-type/content-type.slice";
import {authSlice} from "@/redux/auth/auth.slice";

const rootReducer = combineReducers({
    authSlice: authSlice.reducer,
    offerRequest: offerRequestSlice.reducer,
    singleContent: singleContentSlice.reducer,
    language: languageSlice.reducer,
    contentType: contentTypeSlice.reducer,
});

export const configureStoreWith = () =>
    configureStore({
        reducer: rootReducer,
    });
