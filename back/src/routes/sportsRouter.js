const { getSportsHr } = require("../handlers");
const { Router } = require("express");

const sportsRouter = Router();

sportsRouter.get("/", getSportsHr);

module.exports = sportsRouter;
