'use strict';
module.exports = function(sequelize, DataTypes) {
  var City_Wanderer = sequelize.define('City_Wanderer', {
    likesIt: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return City_Wanderer;
};
