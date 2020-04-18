const express = require("express");
const router = express.Router();
const { Auth } = require("../middleware/Auth");

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Rest API" });
});

//AUTH
const { AuthLogin, AuthRegister } = require("../controllers/Auth");
router.post("/auth/login", AuthLogin);
router.post("/auth/register", AuthRegister);

module.exports = router;
