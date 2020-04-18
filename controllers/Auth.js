const jwt = require("jsonwebtoken");
const models = require("../models");
const UserModel = models.user;

exports.AuthLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ where: { email, password } });
        if (user) {
            const token = jwt.sign(
                { user_id: user.id, level: user.level },
                process.env.SECRET_KEY
            );
            res.status(200).send({
                email,
                token,
                status: true,
                message: "Login Success"
            });
        } else {
            res.status(401).send({ status: false, message: "Invalid login" });
        }
    } catch (err) {
        console.log(err);
    }
};
