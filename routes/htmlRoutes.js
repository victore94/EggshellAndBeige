
var path = require("path");

module.exports = (app) => {

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/cocktail.html"));
  });
  app.get("/drinks", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/drinks.html"));
  });

};
