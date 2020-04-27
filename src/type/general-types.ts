import { Dispatch } from "react";
import { keyInterface } from 'swr';

export type TUserDefinedObject = { [key: string]: any; };
export type TDispatch<T> = Dispatch<{ [key: string]: any; type: T; }>;
export type TReducerAction<T> = { [key: string]: any; type: T; };
export type TApiObject = { key: keyInterface; fetcherOptions?: RequestInit; };
