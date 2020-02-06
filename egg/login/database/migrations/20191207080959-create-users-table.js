'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE} = Sequelize
    return queryInterface.createTable(users, {
      user_id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userneme: {
        type: STRING(255),
        allowNull: false
      },
      password: {
        type: STRING(255),
        allowNull: false
      },
      avatarUrl: STRING(255),
      mobile: STRING(11),
      sex: {type: INTEGER, defaultValue: 0},
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,

    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
