const express = require("express");
const routes = express.Router();

const userController = require("./controller/userController");

routes.get("/users", userController.findAll);
routes.get("/users/:id", userController.findOne);
routes.post("/users", userController.create);
routes.delete("/users/:id", userController.delete);
routes.put("/users/:id", userController.update);


module.exports = routes;
