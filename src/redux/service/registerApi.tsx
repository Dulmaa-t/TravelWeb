import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRegister } from "../../dto/Register";

export const registerApi = createApi({
    reducerPath: "registerApi",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/register' }),
    endpoints: builder => ({
        getTours: builder.query<{ result: IRegister[] }, void>({
            query: () => ({
                url: '/',
                method: 'GET'
            })
        })
    })
   
})

export const { useGetToursQuery } = registerApi;