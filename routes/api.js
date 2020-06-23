const express = require("express");
const router = express.Router();
const { Auth } = require("../middleware/Auth");

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Rest API" });
});

//AUTH
const { AuthLogin } = require("../controllers/Auth");
router.post("/auth/login", AuthLogin);

//TODO
const {
    TodoAll,
    TodoDetails,
    TodoCreate,
    TodoUpdate,
    TodoDelete
} = require("../controllers/Todo");

router.get("/todos", Auth, TodoAll);
router.get("/todo", Auth, TodoDetails);
router.post("/todo", Auth, TodoCreate);
router.patch("/todo", Auth, TodoUpdate);
router.delete("/todo", Auth, TodoDelete);

module.exports = router;
