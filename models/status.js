'use strict';

module.exports = function (sequelize, DataTypes) {
  const Status = sequelize.define(`Status`, {
    status_code: {
      type: DataTypes.INTEGER,
      primaryKey: 1,
      autoIncrement: 1,
      allowNull: 0
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: 0
    }
  }, {
    freezeTableName: 1,
    timestamps: false
  });

  return Status;
};
