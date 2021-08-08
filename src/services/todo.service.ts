import { HttpService } from "./base.service";

class TodoService extends HttpService {
  private readonly prefix: string = "todo";

  /**
   * Create Todo
   * @param data
   */
  create = (data: { title: string }): Promise<any> =>
    this.post(`${this.prefix}/`, data);
  list = (): Promise<any> => this.get(`${this.prefix}/`);
  single = (id: string): Promise<any> => this.get(`${this.prefix}/${id}`);
  remove = (id: string): Promise<any> => this.delete(`${this.prefix}/${id}`);
  update = (args: any): Promise<any> =>
    this.put(`${this.prefix}/${args.id}`, args.todo);
}

export const todoService = new TodoService();
