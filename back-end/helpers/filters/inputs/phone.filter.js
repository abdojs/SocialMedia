const filterPhone = (phone) => {

    phone = phone.trim();

    regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    if (regPhone.test(phone))
        return {
            Phone: true,
            Message: "valid number phone"
        }
    return {
        Phone: false,
        Message: "input phone =>  not valid number phone"
    }


}

module.exports = filterPhone