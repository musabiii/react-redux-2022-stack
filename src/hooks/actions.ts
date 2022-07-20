import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ghActions } from "../store/gh/gh.slice";

const actions = {
  ...ghActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
