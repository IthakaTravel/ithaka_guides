/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Wanderer = sequelize.define('Wanderer', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secure_token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: 'null'
    }
  }, {
    tableName: 'Wanderer',
    freezeTableName: true
  });

  Wanderer.beforeCreate(function(wanderer) {
    var sha1 = require('sha1');
    wanderer.secure_token = sha1(wanderer.email);
  })

  return Wanderer;
};
