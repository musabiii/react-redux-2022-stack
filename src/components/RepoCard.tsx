import React from "react";
import { Link } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { IRepo } from "../models/models";

export default function RepoCard({ repo }: { repo: IRepo }) {

  const {addFavourits}  =  useActions()

  const addToFavourites = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    addFavourits(repo.html_url)
  }

  return (
    <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          {" "}
          Forks: <span className="font-bold">{repo.forks} </span> Watchers:{" "}
          <span className="font-bold"> {repo.watchers} </span>{" "}
        </p>
        <button className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
        onClick={addToFavourites}>
          Add
        </button>
      </a>
    </div>
  );
}
