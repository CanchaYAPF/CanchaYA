const { Router } = require("express");
const driversRoute = require ("./driversRoute");
const teamsRoute = require ("./teamsRoute");


const router = Router();

router.use ("/User", driversRoute);

router.use ("/Field", driversRoute);

router.use ("/Booking", driversRoute);

router.use ("/Review", teamsRoute);

router.use ("/Sports", teamsRoute);

module.exports = router;
