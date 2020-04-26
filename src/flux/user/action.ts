import { IUserVariables, IUserActions, UserActionTypes } from "./type";
import { Auth } from "../../lib/auth";
import { TDispatch } from "../../type/general-types";

export default (state: IUserVariables, dispatch: TDispatch<UserActionTypes>): IUserActions => ({
    setRole: (role) => {
        if (role && role !== state.role) {
            dispatch({
                type: UserActionTypes.SET_ROLE,
                role
            });
        }
    },
    setSignedIn: (user, token) => {
        Auth.setToken(token);
        dispatch({
            type: UserActionTypes.SET_USER,
            user
        });
    },
    setSignedOut: () => {
        Auth.removeToken();
        dispatch({
            type: UserActionTypes.SIGN_OUT,
        });
    }
});
