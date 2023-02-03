import axios from "axios"
const SendData = async (users, dispatchd, path = "login") => {

    dispatchd({ type: "LOGIN_START" });

    try {

        const { data: { status, success, data } } = await axios.post(`${process.env.REACT_APP_URL_APIS}account/${path}`, users);

        console.log({ status, success, data });

        if (success === true && status === 200)
            return dispatchd({ type: "LOGIN_FAILURE", payload: data });

        if (success === false && status === 200)
            return dispatchd({ type: "LOGIN_SUCCESS", payload: data });

    } catch (err) {
        dispatchd({ type: "LOGIN_FAILURE", payload: err });
    }
}


export default SendData








