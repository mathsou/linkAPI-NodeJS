const express = require("express");
const routes = express.Router();

const userController = require("./controller/userController");
const jobController = require("./controller/jobController");

routes.get("/users", userController.findAll);
routes.get("/users/:id", userController.findOne);
routes.post("/users", userController.create);
routes.delete("/users/:id", userController.delete);
routes.put("/users/:id", userController.update);

routes.get("/jobs", jobController.findAll);
routes.get("/jobs/:id", jobController.findOne);
routes.post("/jobs", jobController.create);
routes.delete("/jobs/:id", jobController.delete);
routes.put("/jobs/:id", jobController.update);

module.exports = routes;
