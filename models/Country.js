/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Country',
    freezeTableName: true
  });
};
