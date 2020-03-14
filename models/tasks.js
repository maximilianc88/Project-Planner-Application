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
      targetKey: `status_code`,
      foreignKey: { name: `status_code`, allowNull: false, defaultValue: 1 },
      constraints: false
    });
    Task.belongsTo(models.Project, {
      targetKey: `id`,
      foreignKey: { name: `project_id`, allowNull: false },
      constraints: false
    });
    Task.belongsTo(models.User, {
      targetKey: `user_id`,
      foreignKey: { name: `assignee_id`, allowNull: true, defaultValue: null },
      constraints: false
    });
    Task.belongsTo(models.Team, {
      targetKey: `id`,
      foreignKey: { name: `team_id`, allowNull: true, defaultValue: null },
      constraints: false
    });
  };

  return Task;
};
