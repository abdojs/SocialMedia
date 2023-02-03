import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

console.log(INITIAL_STATE);

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }} >
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthContextProvider
}