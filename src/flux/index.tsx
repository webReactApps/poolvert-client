import { UserStateProvider } from "./user/state";

export default ({ children }) => (
    <UserStateProvider>
        {children}
    </UserStateProvider>
);
