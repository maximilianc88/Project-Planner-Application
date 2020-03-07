'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(`User`, {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function (models) {
    User.belongsTo(models.Team, {
      as: `team_id`
    });
  };

  return User;
};
