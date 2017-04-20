'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Contact.belongsTo(models.Category, {foreignKey: 'CategoryId'});
        Contact.belongsTo(models.City, {foreignKey: 'CityId'})
      }
    }
  });
  return Contact;
};