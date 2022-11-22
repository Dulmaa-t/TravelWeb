import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITour, ICountry, IFeedback, IPost } from "../../dto/Tour";

// '/api'

export const postHistoryApi = createApi({
    reducerPath: "postHistoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/post' }),
    endpoints: builder => ({
        getPosts: builder.query<{ result: IPost[] }, void>({
            query: () => ({
                url: '/',
                method: 'GET'
            })
        })
    })
   
})

export const { useGetPostsQuery } = postHistoryApi;