import { ActionType } from "../actionTypes/ActionType";
import CardReducer from "./reducers";

describe('CardReducer', () => {
  it('updates state with user data when USER_DETAILS action is dispatched', () => {
    const initialState = { userData: [], totalPages: 0 };
    const userData = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];
    const action = { type: ActionType.USER_DETAILS, payload: userData };

    const newState = CardReducer(initialState, action);

    expect(newState.userData).toEqual(userData);
    expect(newState.totalPages).toEqual(0);
  });

  it('updates state with total pages when TOTAL_PAGES action is dispatched', () => {
    const initialState = { userData: [], totalPages: 0 };
    const totalPages = 10;
    const action = { type: ActionType.TOTAL_PAGES, payload: totalPages };

    const newState = CardReducer(initialState, action);

    expect(newState.totalPages).toEqual(totalPages);
    expect(newState.userData).toEqual([]); 
  });

  it('returns current state for unknown action types', () => {
    const initialState = { userData: [], totalPages: 0 };
    const action = { type: 'UNKNOWN_ACTION', payload: {} };

    const newState = CardReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
