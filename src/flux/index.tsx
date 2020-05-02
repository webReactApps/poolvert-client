import * as user from './user/state';

export default ({ children }) => (
    <user.UserStateProvider>
        {children}
    </user.UserStateProvider>
);

export {
    user
};
