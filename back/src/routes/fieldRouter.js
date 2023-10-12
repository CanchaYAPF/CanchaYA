const { Router } = require("express");
const allFieldsHr = require("../handlers/fieldHandlers/allFieldsHr");
const getByIdHr = require("../handlers/fieldHandlers/getByIdHr");
const postFieldHr = require("../handlers/fieldHandlers/postField");

const fieldRouter = Router();
fieldRouter.get("/", allFieldsHr);
fieldRouter.get("/:id", getByIdHr);
fieldRouter.post("/", postFieldHr);

module.exports = fieldRouter;
