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
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: `create_date`,
    updatedAt: `update_date`
  });

  Project.associate = function(models) {
    Project.belongsTo(models.Team, {
      foreignKey: `team_id`,
      allowNull: true
    });
    Project.hasMany(models.Task, {foreignKey: `id`});
  };

  return Project;
};
