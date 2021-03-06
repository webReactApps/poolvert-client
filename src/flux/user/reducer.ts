import { IUserVariables, UserActionTypes } from "./type";
import { initialState } from "./state";
import { TReducerAction } from "../../type/general-types";

export default (state: IUserVariables, action: TReducerAction<UserActionTypes>): IUserVariables => {
    const { type, ...payload } = action;
    switch (type) {
        case UserActionTypes.SET_ROLE:
            const { role } = payload;
            return Object.assign({}, state, { role });
        case UserActionTypes.SET_USER:
            const { user } = payload;
            return Object.assign({}, state, { user });
        case UserActionTypes.SIGN_OUT:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
};
