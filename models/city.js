'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        City.hasMany(models.Contact, {foreignKey: 'CityId'})
      }
    }
  });
  return City;
};