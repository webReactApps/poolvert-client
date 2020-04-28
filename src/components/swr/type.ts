import { keyInterface, ConfigInterface } from 'swr';
import { TUserDefinedObject } from "../../type/general-types";

export type TFetcher<T = TUserDefinedObject> = (url: string, fetcherOptions?: RequestInit) => Promise<T>;

export interface IProps {
  key: keyInterface;
  fetcherOptions?: RequestInit;
  fn?: (...args: any) => any | Promise<any>;
  config?: ConfigInterface;
};
