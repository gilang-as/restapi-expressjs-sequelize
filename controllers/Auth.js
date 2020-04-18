const jwt = require("jsonwebtoken");
const models = require("../models");
const UserModel = models.user;
const PaymentModel = models.payment;
const PetModel = models.pet;

// LOGIN
exports.AuthLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ where: { email, password } });
        if (user) {
            const token = jwt.sign(
                { user_id: user.id, level },
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

//REGISTER
exports.AuthRegister = async (req, res) => {
    try {
        const { breeder, email, password, phone, address, pet } = req.body;
        const { name, gender } = pet;
        const species = pet.species.id;
        const age = pet.age.name;

        const check = await UserModel.findOne({ where: { email } });
        if (check) {
            res.status(401).send({
                status: false,
                message: "The email is ready to login"
            });
        } else {
            const userRes = await UserModel.create({
                email,
                password,
                breeder,
                phone,
                address
            });
            const user = userRes.id;
            await PaymentModel.create({
                no_rek: null,
                proof_of_tran: null,
                user,
                status: "free"
            });
            const petRes = await PetModel.create({
                name,
                gender,
                species,
                age,
                user
            });
            const userss = await UserModel.findOne({
                where: { id: user }
            });
            if (userRes && petRes) {
                const token = jwt.sign(
                    { user_id: userss.id, level: "user" },
                    process.env.SECRET_KEY
                );
                res.status(200).send({
                    email,
                    token,
                    status: true,
                    message: "Register Success"
                });
            } else {
                res.status(401).send({
                    status: false,
                    message: "Invalid Register"
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
};
