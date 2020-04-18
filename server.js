require("dotenv").config();

var cors = require("cors");
const express = require("express");
const app = express();
const route = require("./routes/api");
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/v1", route);
// app.use("/", (req, res) => {
//     res.status(200).json({ message: "Hello World!" });
// });

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({ message: "You are not authorized." });
    } else {
        next(err);
    }
});

app.listen(port, () => console.log(`Server is running in port ${port}`));
