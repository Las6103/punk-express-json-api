const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
  res.redirect("/beers");
});

app.use(express.json());
app.use("/beers", require("./routes/routes.js"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
