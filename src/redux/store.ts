import { configureStore } from "@reduxjs/toolkit";
import { useSelector as useSelectorBase, useDispatch } from "react-redux";
import { tourHistoryApi } from "./service/tourApi";
import { feedbackHistoryApi } from "./service/feedbackApi";
import { postHistoryApi } from "./service/postApi";
import { placeHistoryApi } from "./service/placeApi";

const store = configureStore({
    reducer: {
        [tourHistoryApi.reducerPath]: tourHistoryApi.reducer,
        [feedbackHistoryApi.reducerPath]: feedbackHistoryApi.reducer,
        [postHistoryApi.reducerPath]: postHistoryApi.reducer,
        [placeHistoryApi.reducerPath]: placeHistoryApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tourHistoryApi.middleware).concat(feedbackHistoryApi.middleware).concat(postHistoryApi.middleware).concat(placeHistoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;