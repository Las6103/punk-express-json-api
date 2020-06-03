const express = require("express");
const router = express();
const Beers = require("../models/beers.js");

router.get("/beers", (req, res) => {
  Beers.find({}).then((beers) => res.json(beers));
});

router.get("/beers/:name", (req, res) => {
  Beers.find({ name: req.params.name }).then((beer) => res.json(beer));
});

router.get("/beers/:id", (req, res) => {
  let id = req.params.id;
  Beers.findById(id).then((beer = res.json(beer)));
});

module.exports = router;
