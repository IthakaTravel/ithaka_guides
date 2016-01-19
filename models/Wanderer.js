/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Wanderer', {
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
      allowNull: false
    }
  }, {
    tableName: 'Wanderer',
    freezeTableName: true
  });
};
