'use strict';

module.exports = function (sequelize, DataTypes) {
    const Tasks = sequelize.define(`Task`, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        creation_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
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
        },
        status_code: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        assignee_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    Task.associate = function (models) {
        Task.belongsTo(models.Project, {
            foreignKey: `id`,
            allowNull: true
        });
    };
    

    return Tasks;
};