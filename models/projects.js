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
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    Project.associate = function (models) {
        // Associating Project with Tasks
        // When a Project is deleted, also delete any associated Tasks
        Project.hasMany(models.Task, {
            foreignKey: `project_id`,
            onDelete: `cascade`
        });
    };

    return Project;
};