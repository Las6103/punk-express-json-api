const express = require("express");
const router = express();
const Beers = require("../models/beers.js");

/**
 * GET Routes
 */
router.get("/", (req, res) => {
  Beers.find({}).then((beers) => res.json(beers));
});

router.get("/beers/:name", (req, res) => {
  Beers.find({ name: req.params.name }).then((beer) => res.json(beer));
});

router.get("/id/:id", (req, res) => {
  let id = req.params.id;
  Beers.findById(id).then((beer) => res.json(beer));
});


/**
 * POST Route
 */
router.post("/", (req, res) => {
  Beers.create(req.body).then((beer) => res.json(beer));
});


/**
 * PUT Routes
 */
router.put("/:name", (req, res) => {
  Beers.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true,
  }).then((beer) => res.json(beer));
});

router.put("/id/:id", (req, res) => {
  Beers.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((beer) => res.json(beer));
});

/**
 * DELETE Routes
 */
router.delete("/:name", (req, res) => {
  Beers.findOneAndRemove({ name: req.params.name }).then((beer) =>
    res.json(beer)
  );
});

router.delete("/id/:id", (req, res) => {
  Beers.findByIdAndRemove({ _id: req.params.id }).then((beer) =>
    res.json(beer)
  );
});

module.exports = router;
