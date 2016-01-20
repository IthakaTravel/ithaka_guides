'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });

    */
        return queryInterface.createTable(
                  'City_Images',
                  {
                    image_url: {
                      type: Sequelize.STRING,
                      allowNull: false
                    },
                    is_cover: {
                      type: Sequelize.BOOLEAN,
                      defaultValue: 0,
                      allowNull: false
                    },
                    City_ID: {
                      type: Sequelize.INTEGER,
                      references: 'City',
                      referencesKey: 'id'
                    }
                  }
                )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
