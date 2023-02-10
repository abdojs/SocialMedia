import { createContext, useEffect, useReducer } from "react";
import { getCookie } from "./Cookie"
import Reducer from "./Reducer";

const getTokenCookie = getCookie("ct_user")

const ct_token = typeof getTokenCookie === "string" && getCookie("ct_user") !== "" ? getTokenCookie : null;
const ct_user = JSON.parse(localStorage.getItem("user"))
const INITIAL_STATE = {
    token: ct_token || null,
    user: ct_user || null,
    isFetching: false,
    error: null,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {

        // console.log(ct_token); // fetch data and insert in local storage

    }, [state.user])

    return (
        <AuthContext.Provider value={{
            token: state.token,
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