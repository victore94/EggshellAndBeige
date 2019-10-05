var db = require("../models");

module.exports = function (app) {

  app.get("/api/drinks/", (req, res) => {
    db.Drinks.findAll({}).then((dbDrink) => {
      res.json(dbDrink);
    });
  });

  app.post("/api/drinks", (req, res) => {
    console.log(req.body)
    db.Drinks.create({
      drink_name: req.body.drink_name,
      spirit_one: req.body.spirit_one,
      mixer_one: req.body.mixer_one,
      garnish: req.body.garnish,
      syrup_one: req.body.syrup_one,
      special_instructions: req.body.special_instructions
    }).then((dbDrink) => {
      res.json(dbDrink)
    })
  });
};
