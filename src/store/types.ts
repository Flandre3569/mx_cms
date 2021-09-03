import { IloginState } from './login/types';
import { ISystemState } from './main/system/types';

export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}

export interface IRootWithModule {
  login: IloginState;
  system: ISystemState;
}

export type IStoreType = IRootState & IRootWithModule;
