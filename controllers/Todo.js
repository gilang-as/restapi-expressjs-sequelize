const models = require("../models");
// const jwt = require("jsonwebtoken");
const TodoModel = models.todo;

exports.TodoAll = async (req, res) => {
    // const token = req.header("Authorization").replace("Bearer ", "");
    // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);

    try {
        const { page = 1, results } = req.query;
        const pagination = parseInt(page) - 1;
        const offset = parseInt(pagination) * parseInt(results);
        const limit = parseInt(results);
        const total_items = await TodoModel.count();

        const Todo = await TodoModel.findAll({
            limit,
            offset
        });
        res.status(200).send({
            status: true,
            message: "Success Get Todos",
            counts: total_items,
            data: Todo
        });
    } catch (err) {
        console.log(err);
    }
};
exports.TodoDetails = async (req, res) => {
    // const token = req.header("Authorization").replace("Bearer ", "");
    // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
    const { id } = req.params;
    try {
        const Todo = await TodoModel.findOne({
            where: { id }
        });
        res.status(200).send({
            status: true,
            message: "Success Get Todo Details",
            data: Todo
        });
    } catch (err) {
        console.log(err);
    }
};
exports.TodoCreate = async (req, res) => {
    // const token = req.header("Authorization").replace("Bearer ", "");
    // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
    try {
        const Todo = await TodoModel.create(req.body);
        res.status(200).send({
            status: true,
            message: "Success Add New Todo",
            data: Todo
        });
    } catch (err) {
        console.log(err);
    }
};
exports.TotoUpdate = async (req, res) => {
    // const token = req.header("Authorization").replace("Bearer ", "");
    // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
    const { id } = req.params;
    try {
        const Todo = await TodoModel.update(req.body, {
            where: { id }
        });
        if (Todo) {
            const Data = await TodoModel.findOne({
                where: { id }
            });
            res.status(200).send({
                status: true,
                message: "Success Updated a Todo",
                data: Data
            });
        } else {
            res.status(200).send({
                status: false,
                message: "Error Updated a Todo"
            });
        }
    } catch (err) {
        console.log(err);
    }
};
exports.TodoDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const Todo = await TodoModel.destroy({
            where: { id }
        });
        if (Todo) {
            res.status(200).send({
                status: true,
                message: "Success Deleted a Todo"
            });
        } else {
            res.status(200).send({
                status: false,
                message: "Error Deleted a Todo or Todo Not Found"
            });
        }
    } catch (err) {
        console.log(err);
    }
};
