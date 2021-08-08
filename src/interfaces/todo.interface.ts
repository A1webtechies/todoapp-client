import { IUser } from "./user.interfaces";

export interface ITodo {
  title: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy: IUser;
  _id: string;
}
