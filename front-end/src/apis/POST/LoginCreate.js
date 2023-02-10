import axios from "axios"
import { setCookie } from "../../context/Auth/Cookie.js";

const SendData = async (users, dispatchd, path = "login") => {

    dispatchd({ type: "LOGIN_START" });

    try {

        const { data: { status, success, data } } = await axios.post(`${process.env.REACT_APP_URL_APIS}account/${path}`, users);


        console.log(data);

        let _type = "";
        let resault = ""

        if (success === false && status === 200) {
            _type = "LOGIN_FAILURE"
            resault = data._user
        }

        if (success === true && status === 200) {

            _type = "LOGIN_SUCCESS"
            setCookie("ct_user", data._token, 14)
            localStorage.setItem("user", JSON.stringify(data._user))
            resault = {
                ct_token: data._token,
                ct_user: data._user
            }
        }

        dispatchd({ type: _type, payload: resault });


    } catch (err) {

        const { status } = err.response
        let messageError;

        if (status === 400)
            messageError = "not valid email or number phone or password"
        if (status === 500)
            messageError = "something went wrong in processing rhe service"

        dispatchd({ type: "LOGIN_FAILURE", payload: messageError });



    }
}


export default SendData








