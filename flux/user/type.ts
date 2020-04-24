/**
 * @exports
 *   + IUserVariables => including userContext states types
 *   + IUserActions => including userContext actions types
 *   + IUser => including both IUserVariables and IUserActions interface
 *   + UserActionTypes => type of user actions
 */

export interface IUserVariables {
    role: string;
    user: any;
}

export interface IUserActions {
    setRole: (role: string) => void;
    setSignedIn: (user: any, token: string) => void;
    setSignedOut: () => void;
}

export interface IUser extends IUserVariables, IUserActions {

}

export enum UserActionTypes {
    SET_ROLE,
    SET_USER,
    SIGN_OUT
}
