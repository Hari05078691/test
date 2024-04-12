import axios, { AxiosResponse } from 'axios';
import { fetchUserData } from './userActions';

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: {} })),
  }));

describe('fetchUserData Function', () => {
      it('fetches user data and dispatches actions', async () => {
        const pageNum = 1;
        const userDetails:any[] = [];
        const dispatch = jest.fn();
        const setPageNum = jest.fn();
        const responseData: AxiosResponse = {
          data: {
            data: [{ id: 1, name: 'User 1' }],
            total_pages: 2,
          },
          status: 200,
          statusText: 'OK',
          headers: {}, 
          config: {
            url: `https://reqres.in/api/users?page=${pageNum}`, 
            method: 'GET',
            headers: {} as any, 
          },
        };
      
        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(responseData);
      
        await fetchUserData(pageNum, userDetails, dispatch, setPageNum);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, expect.any(Function));
        expect(dispatch).toHaveBeenNthCalledWith(2, expect.any(Function));
        expect(setPageNum).toHaveBeenCalledWith(pageNum + 1);
      });

      it('handles errors properly', async () => {
        const pageNum = 1;
        const userDetails:any[] = [];
        const dispatch = jest.fn();
        const setPageNum = jest.fn();
        const error = new Error('API Error');
      
        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(error);
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        await fetchUserData(pageNum, userDetails, dispatch, setPageNum);
        expect(dispatch).not.toHaveBeenCalled();
        expect(setPageNum).not.toHaveBeenCalled();
        consoleErrorSpy.mockRestore();
      });
      
});
