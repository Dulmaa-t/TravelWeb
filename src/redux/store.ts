import { configureStore } from "@reduxjs/toolkit";
import { useSelector as useSelectorBase, useDispatch } from "react-redux";
import { tourHistoryApi } from "./service/tourApi";
import { feedbackHistoryApi } from "./service/feedbackApi";
import { postHistoryApi } from "./service/postApi";

const store = configureStore({
    reducer: {
        [tourHistoryApi.reducerPath]: tourHistoryApi.reducer,
        [feedbackHistoryApi.reducerPath]: feedbackHistoryApi.reducer,
        [postHistoryApi.reducerPath]: postHistoryApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tourHistoryApi.middleware).concat(feedbackHistoryApi.middleware).concat(postHistoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;