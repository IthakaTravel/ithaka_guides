/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Distance', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    City_1_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'City',
        key: 'ID'
      }
    },
    City_2_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'City',
        key: 'ID'
      }
    },
    meters: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'Distance',
    freezeTableName: true
  });
};
