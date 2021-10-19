import React, {createContext} from 'react';
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const userAuthentication = useFirebase()
    return (
        <AuthContext.Provider value={userAuthentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;