import React, { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/gh/gh.api";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [dropdown, setDropdown] = useState(false);
  // const debounced = useDebounce(search);
  const { isLoading, isError, isFetching, data } = useSearchUsersQuery(
    debounced,
    { skip: debounced.length < 3 } //query not be invoke if this condition is true
  );

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

    console.log("areReposLoading",areReposLoading)

  //debounce method. When you stop typing, 'setDebounsed' is invoked
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(search);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    console.log(debounced);
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <div className="flex justify-center flex-col pt-10 items-center text-center">
      {isError && "somethig went wrong"}
      {isFetching && "fetching"}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py2 px-4 w-full h-[42px] mb-2 outline-none"
          placeholder="Search for gh username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[300px] shadow-md bg-white overflow-y-scroll">
            {isLoading && <p className="text-center">loading...</p>}
            {data?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                key={user.id}
                onClick={() => clickHandler(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="container">

              {areReposLoading || repos?.map(repo => <RepoCard key={repo.id} repo={repo}/>)}
              {areReposLoading && <p className="text-center">Repos are loading...</p> }

      </div>

    </div>
  );
}
