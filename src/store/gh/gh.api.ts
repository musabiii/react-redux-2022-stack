import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ghApi = createApi({
  reducerPath: "gh/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (build) => ({
    searchUsers: build.query<any,string>({
      query: (search:string) => ({
        url: `search/users`,
        params:{
          q:search
        }
      }),
    }),
  }),
});

//useSearchUsersQuery hook generate automatically based on endpoint
export const {useSearchUsersQuery} = ghApi;
