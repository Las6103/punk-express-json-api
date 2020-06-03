const express = require("express");
const router = express();
const Beers = require("../models/beers.js");

router.get("/beers", (req, res) => {
  Beers.find({}).then((beers) => res.json(beers));
});

router.get("/beers/name/:name", (req, res) => {
  Beers.find({ name: req.params.name }).then((beer) => res.json(beer));
});

router.get("/beers/id/:id", (req, res) => {
  let id = req.params.id;
  Beers.findById(id).then((beer) => res.json(beer));
});

router.post("/beers", (req, res) => {
  Beers.create(req.body).then((beer) => res.json(beer));
});

router.put("/beers/name/:name", (req, res) => {
  Beers.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true,
  }).then((beer) => res.json(beer));
});

router.put("/beers/id/:id", (req, res) => {
  Beers.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((beer) => res.json(beer));
});

router.delete("beers/name/:name", (req, res) => {
  Beers.findOneAndRemove({ name: req.params.name }).then((beer) =>
    res.json(beer)
  );
});

router.delete("/beers/id/:id", (req, res) => {
  Beers.findByIdAndRemove({ _id: req.params.id }).then((beer) =>
    res.json(beer)
  );
});

module.exports = router;
