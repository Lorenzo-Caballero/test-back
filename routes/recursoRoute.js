const express = require("express");
const RecursoRoute = express.Router();
const {
    getResource, getResources, addResource, updateResource, deleteResource
} = require("../controllers/resourceController");

RecursoRoute.get("/recurso/get", getResource);

RecursoRoute.get("/recurso/get", getResources);

RecursoRoute.post("/recurso/post", addResource);

RecursoRoute.put("/recurso/put", updateResource);

RecursoRoute.delete("/recurso/delete", deleteResource);

module.exports = RecursoRoute;