import { Dispatch } from "react";

export type TUserDefinedObject = { [key: string]: any; };
export type TDispatch<T> = Dispatch<{ [key: string]: any; type: T; }>;
export type TReducerAction<T> = { [key: string]: any; type: T; };
