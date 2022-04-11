const express = require("express");
const routes = express.Router();

const userController = require("./controller/userController");
const jobController = require("./controller/jobController");
const typeController = require("./controller/typeController");

const { 
    registerUserValidator, 
    updateUserValidator, 
    deleteUserValidator
} = require("./validators/user.validator")

const { 
    registerJobValidator, 
    updateJobValidator, 
    deleteJobValidator
} = require("./validators/job.validator")

routes.get("/users", userController.findAll);
routes.get("/users/:id", userController.findOne);
routes.post("/users", registerUserValidator, userController.create);
routes.delete("/users/:id", deleteUserValidator, userController.delete);
routes.put("/users/:id", updateUserValidator, userController.update);

routes.get("/jobs", jobController.findAll);
routes.get("/jobs/:id", jobController.findOne);
routes.post("/jobs", registerJobValidator, jobController.create);
routes.delete("/jobs/:id", deleteJobValidator, jobController.delete);
routes.put("/jobs/:id", updateJobValidator, jobController.update);

routes.get("/recurrenceType", typeController.findAll);

module.exports = routes;
