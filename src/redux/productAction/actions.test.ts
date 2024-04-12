import { ActionType } from '../actionTypes/ActionType';
import { setTotalPages, setUserData } from './actions';

describe('setUserData action creator', () => {
  it('dispatches USER_DETAILS action with correct payload', () => {
    const data = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];
    const dispatch = jest.fn();

    setUserData(data)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.USER_DETAILS,
      payload: data,
    });
  });
});

describe('setTotalPages action creator', () => {
  it('dispatches TOTAL_PAGES action with correct payload', () => {
    const data = 10;
    const dispatch = jest.fn();

    setTotalPages(data)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.TOTAL_PAGES,
      payload: data,
    });
  });
});
