const filterPassword = (password, type = true) => {

    if (!type) {
        if (password === "") {
            return {
                Password: false,
                Message: "valid number phone"
            }
        }
    }

    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (regPassword.test(password))
        return {
            Password: true,
            Message: "valid password"
        }
    return {
        Password: false,
        Message: "input password =>  not valid password"
    }

}

module.exports = filterPassword