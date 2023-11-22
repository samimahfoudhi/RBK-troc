const express = require("express");
const route = express.Router();
const db = require("../models");
route.post("/createAdmin", (req, res) => {
  db.Admin.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllAdmins", (req, res) => {
  db.Admin.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
module.exports = route;
