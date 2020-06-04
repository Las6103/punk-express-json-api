const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/punk-api-beers";
}

mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
    .then((instance) =>
      console.log(`Connected to db: ${instance}`)
    )
    .catch((error) => console.log("Connection failed!", error))
);

module.exports = mongoose;
