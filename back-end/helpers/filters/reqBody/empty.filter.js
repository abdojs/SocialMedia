

const emptyReqBody = (body, mes,) => {


    try {
        if (!Object.keys(body).length) {
            throw { success: false, data: mes }
        }
    } catch (error) {
        throw error
    }




}


module.exports = emptyReqBody