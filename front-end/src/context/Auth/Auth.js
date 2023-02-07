import { createContext, useEffect, useReducer } from "react";
import { getCookie } from "./Cookie"
import Reducer from "./Reducer";

const getTokenCookie = getCookie("ct_user")

const ct_user = typeof getTokenCookie === "string" && getCookie("ct_user") !== "" ? getTokenCookie : null;

const INITIAL_STATE = {
    token: ct_user || null,
    user: null,
    isFetching: false,
    error: null,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {

        // console.log(ct_user); // fetch data and insert in local storage

        localStorage.setItem("user", JSON.stringify(state.user))

    }, [state.user])

    return (
        <AuthContext.Provider value={{
            user: state.token,
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