const express = require("express");
const routes = express.Router();

const userController = require("./controller/userController");

routes.get("/", userController.findAll);


module.exports = routes;
