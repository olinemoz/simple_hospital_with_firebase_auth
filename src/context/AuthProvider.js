import React, {createContext} from 'react';
import useLogin from "../hooks/useLogin";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const userAuthentication = useLogin()
    return (
        <AuthContext.Provider value={userAuthentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;