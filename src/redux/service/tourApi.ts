import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITour, ICountry, IFeedback, IPost } from "../../dto/Tour";

// '/api'

export const tourHistoryApi = createApi({
    reducerPath: "tourHistoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/tour' }),
    endpoints: builder => ({
        getTours: builder.query<{ result: ITour[] }, void>({
            query: () => ({
                url: '/',
                method: 'GET'
            })
        })
    })
   
})

export const { useGetToursQuery } = tourHistoryApi;