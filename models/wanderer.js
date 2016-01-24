'use strict';

var sha1 = require('sha1');

module.exports = function(sequelize, DataTypes) {
  var Wanderer = sequelize.define('Wanderer', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    secretToken: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.Wanderer.belongsToMany(models.City, { through: { model: models.City_Wanderer } });
      }
    }
  });
  Wanderer.beforeCreate(function (wanderer) {
    wanderer.secretToken = sha1(wanderer.email);
  });
  return Wanderer;
};
