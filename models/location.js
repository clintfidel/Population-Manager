'use strict';

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location: DataTypes.STRING,
    no_of_males: DataTypes.STRING,
    no_of_females: DataTypes.STRING
  }, {});
  Location.associate = function (models) {
    // associations can be defined here
  };
  return Location;
};
