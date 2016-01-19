/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Activity', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'City',
        key: 'ID'
      }
    }
  }, {
    tableName: 'Activity',
    freezeTableName: true
  });
};
