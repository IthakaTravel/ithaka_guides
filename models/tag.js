'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Tag.belongsToMany(models.City, { through: { model: models.City_Tag } });
      }
    }
  });
  return Tag;
};
