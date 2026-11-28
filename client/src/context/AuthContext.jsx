import { createContext, useState, useContext, useMemo, useCallback, useEffect } from "react";
import { authAPI } from "../services/api";


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register User
    const handleRegister = useCallback(async(formdata) => {
        const {data} = await authAPI.register(formdata);
        localStorage.setItem("wander_token", data.token);
        localStorage.setItem("wander_user", JSON.stringify(data.user));
        setUser(data.user);
        return data;
    }, [])


    const authValue = useMemo(() => ({
        user, 
        loading,
        register: handleRegister,
    }), [user, loading, handleRegister]);

    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("use Auth must be consumed within an AuthProvider");
    }
    return context;
}