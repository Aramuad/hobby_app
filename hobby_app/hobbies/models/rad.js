'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rad = sequelize.define('Rad', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Rad.associate = function(models) {
    // associations can be defined here
  };
  return Rad;
};