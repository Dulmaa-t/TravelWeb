import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITour, ICountry, IFeedback, IPost } from "../../dto/Tour";

// '/api'

export const feedbackHistoryApi = createApi({
    reducerPath: "feedbackHistoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/feedback' }),
    endpoints: builder => ({
        getFeedbacks: builder.query<{ result: IFeedback[] }, void>({
            query: () => ({
                url: '/',
                method: 'GET'
            })
        })
    })
   
})

export const { useGetFeedbacksQuery } = feedbackHistoryApi;