import { IUserVariables, IUserActions, UserActionTypes } from "./type";
import { Auth } from "../../lib/auth";

export default (state: IUserVariables, dispatch): IUserActions => ({
    setRole: (role = "") => {
        if (role !== state.role) {
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
