const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Punk-Api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
