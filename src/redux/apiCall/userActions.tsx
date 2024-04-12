import axios from "axios";
import { setUserData, setTotalPages } from "../productAction/actions";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { url } from "../actionTypes/ActionType";

export const fetchUserData: any = (
  pageNum: number,
  userDetails: any,
  dispatch: (arg0: {
    (dispatch: ThunkDispatch<null, null, AnyAction>): void;
    (dispatch: ThunkDispatch<null, null, AnyAction>): void;
  }) => void,
  setPageNum: (arg0: any) => void
) => {
  axios
    .get(`${url.baseURL}${pageNum}`)
    .then((response: any) => {
      const userList =
        userDetails.length > 0
          ? [...userDetails, ...response?.data?.data]
          : response?.data?.data;
      dispatch(setUserData(userList));
      dispatch(setTotalPages(response?.data?.total_pages));
      setPageNum(pageNum + 1);
    })
    .catch((error: any) => {
      console.log(error, "API is throwing error");
    });
};

export const lastIndexApiCall = (
  userDetails: any,
  pageNum: number,
  dispatch: (arg0: {
    (dispatch: ThunkDispatch<null, null, AnyAction>): void;
    (dispatch: ThunkDispatch<null, null, AnyAction>): void;
  }) => void,
  setPageNum: (arg0: any) => void
) => {
  if (userDetails.length < 1) {
    fetchUserData(pageNum, userDetails, dispatch, setPageNum);
  }
};
