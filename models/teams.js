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
  });

  Team.associate = function (models) {

    Team.hasMany(models.Project, {
      foreignKey: `team_id`
    });
  };

  return Team;
};