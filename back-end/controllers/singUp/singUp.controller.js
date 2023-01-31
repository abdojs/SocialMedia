

const singUpModule = require('../../modules/singUp/singUp.modele');



const singUp = async (req, res) => {


    console.log(singUpModule);

    await res.status(200).json({ success: "success in send request" })
}






module.exports = singUp