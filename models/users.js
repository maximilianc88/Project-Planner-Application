/* eslint-disable camelcase */
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
  }, {
    underscored: true,
    timestamps: true,
    createdAt: `create_date`,
    updatedAt: `update_date`
  });

  User.associate = function (models) {
    User.belongsTo(models.Team, {
      targetKey: `id`,
      foreignKey: { name: `team_id`, allowNull: true, defaultValue: null }
    });
    User.hasMany(models.Task, {
      sourceKey: `user_id`,
      foreignKey: { name: `assignee_id`, allowNull: true, defaultValue: null }
    });
  };

  return User;
};
