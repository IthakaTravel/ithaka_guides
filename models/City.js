/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('City', {
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
      type: DataTypes.STRING,
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
    }
  }, {
    tableName: 'City',
    freezeTableName: true
  });
};
