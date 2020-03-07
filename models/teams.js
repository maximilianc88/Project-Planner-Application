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
    timestamps: true,
    createdAt: `create_date`,
    updatedAt: `update_date`
  });

  return Team;
};
