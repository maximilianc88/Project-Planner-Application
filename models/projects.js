'use strict';

module.exports = function (sequelize, DataTypes) {

  const Project = sequelize.define(`Project`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  Project.associate = function(models) {
    Project.belongsTo(models.Team, {
      as: `team_id`,
      allowNull: true
    });
  };

  return Project;
};
