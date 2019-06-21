'use strict';

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_of_males: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    no_of_females: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Location.associate = function (models) {
    // associations can be defined here
  };
  return Location;
};
