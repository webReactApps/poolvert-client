/**
 * @exports
 *   + initialState
 *   + UserStateContext => usable by calling => useContext(UserStateContext.context)
 *   + UserStateProvider => for wrapping elements with context => <UserStateProvider> children </UserStateProvider>
 *   + useUserStateValue => for using context features in project, by calling this
 *     function, it will return all context state including variables and actions
 */

import React, { createContext, useContext, useReducer, ReactElement } from "react";
import reducer from "./reducer";
import actions from "./action";
import { IUserActions, IUserVariables, IUser } from "./type";

export const initialState: IUserVariables = {
    role: "",
    user: null,
};

export const UserStateContext = createContext<IUserVariables | IUserActions | null>(null);

export const UserStateProvider = ({ children }: { children: ReactElement }): ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserStateContext.Provider value={Object.assign({}, state, actions(state, dispatch))}>
            {children}
        </UserStateContext.Provider>
    );
};

export const useUserStateValue = () => useContext(UserStateContext) as IUser;
