'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    dailySpend: DataTypes.INTEGER,
    zone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.City.belongsTo(models.Country);
        models.City.belongsToMany(models.Tag, { through: { model: models.City_Tag } });
        models.City.belongsToMany(models.Wanderer, { through: { model: models.City_Wanderer } });
      }
    }
  });
  return City;
};
