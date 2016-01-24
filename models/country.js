'use strict';
module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Country.hasMany(models.City);
      }
    }
  });
  return Country;
};
