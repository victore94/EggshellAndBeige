var db = require("../models");

module.exports = (app) => {

  app.get("/api/drinks/", (req, res) => {
    db.Drink.findAll({})
      .then((dbDrink) => {
        res.json(dbDrink);

      });
  });
};
