import { ActionType, url } from "./ActionType";

describe('ActionType', () => {
  it('should have correct values', () => {
    expect(ActionType.USER_DETAILS).toEqual('USER_DETAILS');
    expect(ActionType.TOTAL_PAGES).toEqual('TOTAL_PAGES');
  });
});

describe('url', () => {
  it('should have correct baseURL', () => {
    expect(url.baseURL).toEqual('https://reqres.in/api/users?page=');
  });
});
