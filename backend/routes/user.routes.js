
const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth.middleware");

const {
    profile
} = require("../controllers/user.controller");

router.get(
    "/profile",
    auth,
    profile
);

module.exports = router;