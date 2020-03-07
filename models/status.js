'use strict';

module.exports = function (sequelize, DataTypes) {
  const Status = sequelize.define(`Status`, {
    status_code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Status;
};
