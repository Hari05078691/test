import { ActionType } from "../actionTypes/ActionType";

const currentState: any = { userData: [], totalPages: 0 };

export const CardReducer = (state = currentState, action: any) => {
  switch (action.type) {
    case ActionType.USER_DETAILS:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};

export default CardReducer;
