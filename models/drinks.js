module.exports = (sequelize, DataTypes) => {
  var Drinks = sequelize.define("Drinks", {
    drink_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    spirit_one: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // spirit_two: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // spirit_three: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // spirit_four: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // spirit_five: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    mixer_one: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      defaultValue: 'none'
    },
    // mixer_two: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // mixer_three: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // mixer_four: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // mixer_five: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    syrup_one: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    //   defaultValue: 'none'
    // },
    // syrup_two: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // syrup_three: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // syrup_four: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // syrup_five: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    // ice: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },
    garnish: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    // tag: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'none'
    // },

    special_instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'none'
    }
    // upRating: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    // downRating: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // }
  });

  return Drinks;
};
