const express = require("express");
const app = express();

app.get('/', function(req, res){
  res.redirect('/beers');
});

app.use(express.json());
app.use("/", require("./routes/routes.js"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
