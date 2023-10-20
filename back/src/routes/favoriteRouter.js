const postFavoritedHr = require("../handlers/favorite/postFavoriteHr");
const getFavsHr = require("../handlers/favorite/getFavoriteHr")
const { Router } = require("express");

const favoriteRouter = Router();

favoriteRouter.get("/:id", getFavsHr);
favoriteRouter.post("/", postFavoritedHr);

module.exports = favoriteRouter;
