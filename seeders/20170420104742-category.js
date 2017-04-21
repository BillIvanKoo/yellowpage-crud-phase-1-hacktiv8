'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories',
    [{
      name: 'Pertanian dan Perkebunan'
    },{
      name: 'Peralatan Agrikultur'
    },{
      name: 'Pertambakan Ikan'
    },{
      name: 'Peternakan Hewan Potong'
    },{
      name: 'General Contractor'
    },{
      name: 'Bengkel Otomotif'
    },{
      name: 'Restoran, Hotel dan Kafe'
    },{
      name: 'Pertambangan'
    },{
      name: 'Perikanan Laut Lepas'
    },{
      name: 'Kehutanan'
    },{
      name: 'Pengelola Objek Wisata'
    }
    ],{});
  }
};

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
