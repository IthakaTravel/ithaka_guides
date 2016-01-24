/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
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
    is_starred: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'Tag',
    freezeTableName: true
  });

  return Tag;
};