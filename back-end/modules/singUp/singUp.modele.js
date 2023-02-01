

const { coonectDB, disConnectDB } = require("../../dataBase/connect")
const User = require('../../schemas/singUp/schema');
const bcrypt = require("bcrypt");


const singUp = async ({ email, password, phone, name }) => {

    try {
        return await coonectDB().then(async () => {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                email: email,
                name: name,
                phone: phone,
                password: hashedPassword,
            });

            const user = await newUser.save();

            disConnectDB()

            const { email: _email, name: _name, profilePicture: _profilePicture, _id: _id } = user

            return {
                type: true,
                message: { _profilePicture, _email, _name, _profilePicture, _id },
                status: 201,
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

module.exports = singUp