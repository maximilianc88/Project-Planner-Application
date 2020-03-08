'use strict';

module.exports = function (sequelize, DataTypes) {
  const Task = sequelize.define(`Task`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
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
  },
  {
    timestamps: true,
    createdAt: `create_date`,
    updatedAt: `update_date`
  });
  Task.associate = function (models) {
    Task.belongsTo(models.Status, {
      foreignKey: `status_code`,
      allowNull: false
    });
    Task.belongsTo(models.Project, {
      foreignKey: `project_id`,
      allowNull: false
    });
    Task.belongsTo(models.User, {
      foreignKey: `assignee_id`,
      allowNull: true
    });
    Task.belongsTo(models.Team, {
      foreignKey: `team_id`,
      allowNull: true
    });
  };

  return Task;
};
