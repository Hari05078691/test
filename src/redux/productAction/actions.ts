import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionType } from "../actionTypes/ActionType";

export const setUserData =
  (data: any[]) => (dispatch: ThunkDispatch<null, null, AnyAction>) => {
    dispatch({
      type: ActionType.USER_DETAILS,
      payload: data,
    });
  };

export const setTotalPages =
  (data: number) => (dispatch: ThunkDispatch<null, null, AnyAction>) => {
    dispatch({
      type: ActionType.TOTAL_PAGES,
      payload: data,
    });
  };
