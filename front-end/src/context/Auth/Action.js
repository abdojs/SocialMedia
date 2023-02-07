export const LoginStart = () => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (resault) => ({
    type: "LOGIN_SUCCESS",
    payload: resault
});

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});

