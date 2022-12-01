const express = require("express");
const userRoute = express.Router();
const {
    addUser,
    getUsers,
    deleteUser,
} = require("../controllers/userController");

userRoute.get("/get", getUsers);
userRoute.post("/post", addUser);
userRoute.delete("/delete/:id", deleteUser);

module.exports = userRoute;