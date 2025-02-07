import { createContext, useContext, useState } from "react";

const UserContext = createContext({ user: null, isLoggedIn: false });

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const Login = (userData) => setUser(userData);

    const Logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, Login, Logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado
export const useUser = () => useContext(UserContext);

