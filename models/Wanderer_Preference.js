/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Wanderer_Preference', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Wanderer_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Wanderer',
        key: 'ID'
      }
    },
    City_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'City',
        key: 'ID'
      }
    },
    is_awesome: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'Wanderer_Preference',
    freezeTableName: true
  });
};
