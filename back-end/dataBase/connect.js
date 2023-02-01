const mongoose = require("mongoose")


const coonectDB = () => {
    return mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
}

const disConnectDB = () => {
    return mongoose.disconnect(() => console.log("Disconnecting from  data base MongoDB"))

}


module.exports = { coonectDB, disConnectDB }