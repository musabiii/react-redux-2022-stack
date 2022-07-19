import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ServerResponse } from "../../models/models";
export const ghApi = createApi({
  reducerPath: "gh/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (build) => ({
    searchUsers: build.query<IUser[],string>({
      query: (search:string) => ({
        url: `search/users`,
        params:{
          q:search,
          per_page:10
        }
      }),
      //transformResponse - tranforme data from response
      transformResponse:(response:ServerResponse)=> response.items,
    }),
  }),
});

//useSearchUsersQuery hook generate automatically based on endpoint
export const {useSearchUsersQuery} = ghApi;
