const mongoose = require("mongoose")


exports.coonect = mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
    console.log("Connection from data base MongoDB");
})

exports.desconnect = mongoose.disconnect(() => console.log("Disconnecting from  data base MongoDB"))


