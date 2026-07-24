const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();


app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "RBAC Authentication API Running"
    });
});

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

module.exports = app;