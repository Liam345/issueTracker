import express = require("express");
const app: express.Application = express();

app.get("/", function(req, res) {
  res.send("Hello dev!");
});

app.listen(5000, function() {
  console.log("Hello dev");
});
