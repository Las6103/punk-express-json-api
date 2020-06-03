const beersData = require("../db/beersdata.json");
const beerModel = require("../models/beers.js");

/**
 * Take only the data I want for my model
 */
const Beer = beersData.map((beer) => {
  let beers = {};
  beers.name = beer.name;
  beers.tagline = beer.tagline;
  beers.first_brewed = beer.first_brewed;
  beers.description = beer.description;
  beers.image_url = beer.image_url;
  beers.food_pairing = beer.food_pairing;
  beers.brewers_tips = beer.brewers_tips;
  beers.contributed_by = beer.contributed_by;
  return beers;
});

/**
 * Creates Mongo DB
 */
beerModel.deleteMany({}).then(() => {
  beerModel
    .create(Beer)
    .then((beers) => {
      console.log(beers);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
    });
});
