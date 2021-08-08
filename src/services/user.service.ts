
import { HttpService } from "./base.service";

class UserService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Get basic Profile
   */
  me = <T>(): Promise<T> => this.get(`${this.prefix}/me`);

  
}

export const userService = new UserService();
