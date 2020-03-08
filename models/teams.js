'use strict';

module.exports = function (sequelize, DataTypes) {
  const Team = sequelize.define(`Team`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: `create_date`,
    updatedAt: `update_date`
  });

  Team.associate = function (model) {
    Team.hasMany(model.User, {
      foreignKey: { name: `team_id`, allowNull: true }
    });
    Team.hasMany(model.Project, {
      foreignKey: { name: `team_id`, allowNull: true }
    });
    Team.hasMany(model.Task, {
      foreignKey: { name: `team_id`, allowNull: true }
    });
  };

  return Team;
};
