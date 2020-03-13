/* eslint-disable camelcase */
'use strict';

module.exports = function (sequelize, DataTypes) {
  const Status = sequelize.define(`Status`, {
    status_code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
      defaultValue: 1
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    timestamps: false
  });
  Status.associate = function (models) {
    Status.hasMany(models.Task, {
      foreignKey: `status_code`
    });
  };

  return Status;
};
