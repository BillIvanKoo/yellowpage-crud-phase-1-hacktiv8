'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Category.hasMany(models.Contact, {foreignKey: 'CategoryId'})
      }
    }
  });
  return Category;
};