const express = require("express");
const route = express.Router();
const db = require("../models");
route.post("/addToCart", (req, res) => {
  db.UserBasket.create({
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllFromUserBasket", (req, res) => {
  db.UserBasket.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.delete("/deleteProductFromBasket/:id", (req, res) => {
  db.UserBasket.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.delete("/deleteAllProductFromBasket", (req, res) => {
  db.UserBasket.destroyAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});

module.exports = route;
