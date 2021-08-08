import { HttpService } from "./base.service";
import { IAuthLogin, IAuthRegister } from "../interfaces";

class AuthService extends HttpService {
  private readonly prefix: string = "auth";

  /**
   * Basic Authenticate User
   * @param data
   */
  login = (data: IAuthLogin): Promise<any> =>
    this.post(`${this.prefix}/login`, data);

  register = (data: IAuthRegister): Promise<any> =>
    this.post(`${this.prefix}/register`, data);
}

export const authService = new AuthService();
