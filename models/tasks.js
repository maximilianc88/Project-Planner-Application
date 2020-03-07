'use strict';

module.exports = function (sequelize, DataTypes) {
  const Task = sequelize.define(`Task`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    creation_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  Task.associate = function (models) {
    Task.belongsTo(models.Status, {
      as: `status_code`,
      allowNull: false
    });
  };
  Task.associate = function (models) {
    Task.belongsTo(models.Project, {
      as: `project_id`,
      allowNull: false
    });
  };
  Task.associate = function(models) {
    Task.belongsTo(models.Team, {
      as: `team_id`,
      allowNull: true
    });
  };
  Task.associate = function(models) {
    Task.belongsTo(models.User, {
      as: `assignee_id`,
      allowNull: true
    });
  };

  return Task;
};
