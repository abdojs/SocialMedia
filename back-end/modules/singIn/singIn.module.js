const { coonectDB, disConnectDB } = require("../../dataBase/connect")
const User = require('../../schemas/singUp/schema');
const bcrypt = require("bcrypt");

const singIn = async ({ emailPhone, password }, withLogin) => {

    try {
        return await coonectDB().then(async () => {

            const typeLogin = withLogin ? 'email' : 'phone';

            const user = await User.findOne({ [typeLogin]: emailPhone });

            disConnectDB()

            if (!user)
                return {
                    type: false,
                    message: "uers not found",
                    status: 200,
                };

            const validPassword = await bcrypt.compare(password, user.password)

            if (!validPassword)
                return {
                    type: false,
                    message: "wrong password",
                    status: 200,
                };

            const { email: _email, name: _name, profilePicture: _profilePicture, _id: _id } = user

            return {
                type: true,
                message:  { _profilePicture, _email, _name, _profilePicture, _id },
                status: 200,
            }
        })
    } catch (error) {

        return {
            type: false,
            message: error,
            status: 400,
        }

    }

}

module.exports = singIn