const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: String,
  tagline: String,
  first_brewed: String,
  description: String,
  image_url: String,
  food_pairing: [String],
  brewers_tips: String,
  contributed_by: String,
});

const Beers = mongoose.model("Beers", beerSchema);

module.exports = Beers;
