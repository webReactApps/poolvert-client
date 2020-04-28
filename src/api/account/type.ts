import { TApiObject } from "../../type/general-types";

export type TLogin = (mobile: string, password: string) => TApiObject;
export type TGetProfile = () => TApiObject;
