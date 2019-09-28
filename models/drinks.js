module.exports = function (sequelize, DataTypes) {
  var Drinks = sequelize.define("Drinks", {
    drink_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    spirits:
    {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    mixer: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    syrup: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    ice: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tag: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    garnish: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    special_instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return Drinks;
};
