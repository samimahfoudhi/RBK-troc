const express = require("express");
const route = express.Router();
const db = require("../models");

route.post("/createProduct", (req, res) => {
  db.Product.create({
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    SellerId: req.body.SellerId,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllProducts", (req, res) => {
  db.Product.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});

route.put("/updateProduct/:id", (req, res) => {
  db.Product.update(
    {
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      price: req.body.price,
      SellerId: req.body.SellerId,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.delete("/deleteProduct/:id", (req, res) => {
  db.Product.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllProductForOne/:id", (req, res) => {
  const SellerId = req.params.id;
  db.Seller.findByPk(SellerId, {
    include: [{ model: db.Product }],
  })
    .then((response) => res.status(201).json(response.Products))
    .catch((err) => res.status(400).json(err));
});

module.exports = route;
