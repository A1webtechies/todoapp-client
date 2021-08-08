export * from "./auth.interface";
export * from "./store.interfaces";
export * from "./user.interfaces";
export * from "./todo.interface";

export interface IResponseSuccess<T> {
  data: T;
  statusCode: number;
  message: string;
}
