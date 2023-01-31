

const filterEmail = (email) => {

    regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (regEmail.test(email))
        return {
            Email: true,
            Message: "valid email adrress"
        }
    return {
        Email: false,
        Message: "input email => not valid email adrress"
    }


}


module.exports = filterEmail;