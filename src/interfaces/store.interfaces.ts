import { IAuth } from "./auth.interface";
import { ITodo } from "./todo.interface";

export interface IStore {
  auth: IAuth;
  todos: ITodoReducer;
}

export interface ITodoReducer {
  items: IDynamic;
  selectedItem: ITodo;
  loading: boolean;
}

export interface IDynamic {
  [key: string]: ITodo;
}
