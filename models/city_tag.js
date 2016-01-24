'use strict';
module.exports = function(sequelize, DataTypes) {
  var City_Tag = sequelize.define('City_Tag', {
    isStarred: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return City_Tag;
};
