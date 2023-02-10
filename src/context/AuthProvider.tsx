import React, { createContext, useState } from "react";

interface AuthContextProps {
    auth: { role: string };
    setAuth: (auth: { role: string }) => void;
}

const AuthContext = createContext<AuthContextProps>({
    auth: { role: "" },
    setAuth: () => {},
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState({ role: "" });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;