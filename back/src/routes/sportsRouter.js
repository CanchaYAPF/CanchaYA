const { Router } = require("express");


const getSportsHandler = require ("../handlers/sportsHandlers/getSportsHandler")

const sportsRouter = Router();

sportsRouter.get("/", getSportsHandler);

module.exports = getSportsHandler;
