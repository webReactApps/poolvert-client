import { Dispatch } from "react";
import { IProps } from "../components/swr/type";

export type TUserDefinedObject<T = any> = { [key: string]: T; };
export type TDispatch<T> = Dispatch<{ [key: string]: any; type: T; }>;
export type TReducerAction<T> = { [key: string]: any; type: T; };
export type TApiObject = IProps;

export interface IHttpResponse<T = TUserDefinedObject> {
  entity?: T;
  messages: string[];
  failed: boolean;
  responseType: number;
};
