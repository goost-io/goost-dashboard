import {offerRequestSlice} from "@/redux/offer-request/offer-request.slice";
import {singleContentSlice} from "@/redux/single-content/content.slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {languageSlice} from "@/redux/types/language/language.slice";
import {contentTypeSlice} from "@/redux/types/content-type/content-type.slice";


const rootReducer = combineReducers({
    offerRequest: offerRequestSlice.reducer,
    singleContent: singleContentSlice.reducer,
    language: languageSlice.reducer,
    contentType: contentTypeSlice.reducer,
});

export const configureStoreWith = () =>
    configureStore({
        reducer: rootReducer,
    });
