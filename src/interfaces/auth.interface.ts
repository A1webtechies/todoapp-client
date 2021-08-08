import { IUser } from ".";

export interface IAuthLogin {
  identifier: string;
  password: string;
}
export interface IAuthRegister {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
}

export interface IAuth {
  access_token: string;
  user: IUser;
  message: "";
  loading: boolean;
}
