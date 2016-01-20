/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var City_Image = sequelize.define('City_Image', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_cover: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    City_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'City',
        key: 'ID'
      }
    },
  }, {
    tableName: 'City_Images',
    freezeTableName: true
  });

  return City_Image;
};
