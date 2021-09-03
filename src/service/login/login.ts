import { IAccount, IData, ILoginResult } from './types';
import hyRequest from '../index';

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IData<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IData>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  });
}

export function requestUserMenuByRoleId(id: number) {
  return hyRequest.get<IData>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  });
}
