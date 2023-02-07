const jwt = require('jsonwebtoken');

let secret = 'application/json/secret/985632147857'

const expiresIn = { expiresIn: '14 days' }

const token = (jsonData) => {
    return jwt.sign(jsonData, secret, expiresIn);
}

const verify = (token) => {

    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return { error: "bad token" }
    }
}

module.exports = { token, verify };