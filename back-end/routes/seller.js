const express = require("express");
const route = express.Router();
const db = require("../models");
route.post("/createSeller", (req, res) => {
  db.Seller.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    adress: req.body.adress,
    phoneNumber: req.body.phoneNumber,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllSellers", (req, res) => {
  db.Seller.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.delete("/deleteSeller/:id", (req, res) => {
  db.Seller.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
module.exports = route;
