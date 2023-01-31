const filterName = (name) => {

    regName = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;

    if (regName.test(name))
        return {
            Name: true,
            Message: "valid name"
        }
    return {
        Name: false,
        Message: "input name =>  not valid name"
    }

}

module.exports = filterName