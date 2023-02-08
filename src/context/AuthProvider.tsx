import { createContext, useState, ReactNode } from "react";

interface AuthState {
    auth: object ;
}

const enum Roles{
    User='User',
    Dealer='Dealer'
}
interface AuthContextProps {
    auth: {roles:Roles};
    setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthState>({} as AuthState);

    return (
        <AuthContext.Provider value={{ auth:{roles:Roles.User}, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
