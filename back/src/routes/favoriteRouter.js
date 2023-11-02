const postFavoritedHr = require("../handlers/favorite/postFavoriteHr");
const getFavsHr = require("../handlers/favorite/getFavoriteHr")
const deleteFavoriteHr = require("../handlers/favorite/deleteFavoriteHr")

const { Router } = require("express");

const favoriteRouter = Router();

favoriteRouter.get("/:id", getFavsHr);
favoriteRouter.post("/", postFavoritedHr);
favoriteRouter.post("/del", deleteFavoriteHr);


module.exports = favoriteRouter;
