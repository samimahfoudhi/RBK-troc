const express = require("express");
const route = express.Router();
const db = require("../models");

route.post("/createHisto", (req, res) => {
  db.userHisto.create({
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    date: req.body.date,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAlluserHisto", (req, res) => {
  db.userHisto.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});

route.delete("/deleteuserHisto", (req, res) => {
  db.userHisto.destroyAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});


module.exports = route;
