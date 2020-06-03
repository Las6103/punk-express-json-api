const express = require("express");
const router = express();
const Beers = require("../models/beers.js");

router.get("/beers", (req, res) => {
  Beers.find({}).then((beers) => res.json(beers));
});

module.exports = router;
