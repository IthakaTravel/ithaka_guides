/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    daily_spend: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Country_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Country',
        key: 'ID'
      }
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'City',
    freezeTableName: true
  });

  return City;
};
