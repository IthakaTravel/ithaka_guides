/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var City_Tag = sequelize.define('City_Tag', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    City_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'City',
        key: 'ID'
      }
    },
    Tag_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Tag',
        key: 'ID'
      }
    }
  }, {
    tableName: 'City_Tag',
    freezeTableName: true
  });

  return City_Tag;
};
