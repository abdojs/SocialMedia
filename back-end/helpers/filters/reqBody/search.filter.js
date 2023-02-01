

const searchReqBody = (body, mes, arr) => {
    let err = []
    let inputs = Object.keys(body)

    try {

        for (let idx = 0; idx < inputs.length; idx++)
            if (!arr.includes(inputs[idx]))
                err.push(inputs[idx])


        if (err.length)
            throw {
                success: false,
                data: ` ${mes} => ${err}`
            }
    } catch (error) {
        throw error
    }
}


module.exports = searchReqBody