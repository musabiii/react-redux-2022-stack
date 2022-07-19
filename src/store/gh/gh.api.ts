import { build } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, IUser, ServerResponse } from "../../models/models";
export const ghApi = createApi({
  reducerPath: "gh/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      //transformResponse - tranforme data from response
      transformResponse: (response: ServerResponse) => response.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

//useSearchUsersQuery hook generate automatically based on endpoint
//Lazy another variant of hook that load later when it needed
export const { useSearchUsersQuery,useLazyGetUserReposQuery } = ghApi;
