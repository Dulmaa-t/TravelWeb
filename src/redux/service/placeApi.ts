import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlace, ICountry } from "../../dto/Tour";

// '/api'

export const placeHistoryApi = createApi({
    reducerPath: "placeHistoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/place' }),
    endpoints: builder => ({
        getPlaces: builder.query<{ result: IPlace[] }, void>({
            query: () => ({
                url: '/',
                method: 'GET'
            })
        })
    })
   
})

export const { useGetPlacesQuery } = placeHistoryApi;