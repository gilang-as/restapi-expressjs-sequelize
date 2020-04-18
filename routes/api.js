const express = require("express");
const router = express.Router();
const { Auth } = require("../middleware/Auth");

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Rest API" });
});

//AUTH
const { AuthLogin } = require("../controllers/Auth");
router.post("/auth/login", AuthLogin);

module.exports = router;
