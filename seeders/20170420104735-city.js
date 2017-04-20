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
    },{name: }, {name}], {});
    */
    return queryInterface.bulkInsert('Cities',
    [{
      name: 'Jakarta Pusat'
    },{
      name: 'Jakarta Barat'
    },{
      name: 'Jakarta Timur'
    },{
      name: 'Jakarta Utara'
    },{
      name: 'Jakarta Selatan'
    },{
      name: 'Depok'
    },{
      name: 'Kota Bogor'
    },{
      name: 'Kabupaten Bogor'
    },{
      name: 'Tangerang'
    },{
      name: 'Tangerang Selatan'
    },{
      name: 'Kabupaten Tangerang'
    },{
      name: 'Bekasi'
    },{
      name: 'Karawang'
    },{
      name: 'Bandung'
    },{
      name: 'Semarang'
    },{
      name: 'Surabaya'
    },{
      name: 'Yogyakarta'
    },{
      name: 'Surakarta'
    },{
      name: 'Malang'
    },{
      name: 'Denpasar'
    },{
      name: 'Mataram'
    },{
      name: 'Kupang'
    },{
      name: 'Bandar Lampung'
    },{
      name: 'Jambi'
    },{
      name: 'Medan'
    },{
      name: 'Palembang'
    },{
      name: 'Banda Aceh'
    },{
      name: 'Batam'
    },{
      name: 'Palangkaraya'
    },{
      name: 'Banjarmasin'
    },{
      name: 'Pontianak'
    }, {
      name: 'Samarinda'
    },{
      name: 'Makassar'
    },{
      name: 'Palu'
    },{
      name: 'Manado'
    },{
      name: 'Ambon'
    },{
      name: 'Jayapura'
    }
    ],{});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Cities',
    [{
      name: 'Jakarta Pusat'
    },{
      name: 'Jakarta Barat'
    },{
      name: 'Jakarta Timur'
    },{
      name: 'Jakarta Utara'
    },{
      name: 'Jakarta Selatan'
    },{
      name: 'Depok'
    },{
      name: 'Kota Bogor'
    },{
      name: 'Kabupaten Bogor'
    },{
      name: 'Tangerang'
    },{
      name: 'Tangerang Selatan'
    },{
      name: 'Kabupaten Tangerang'
    },{
      name: 'Bekasi'
    },{
      name: 'Karawang'
    },{
      name: 'Bandung'
    },{
      name: 'Semarang'
    },{
      name: 'Surabaya'
    },{
      name: 'Yogyakarta'
    },{
      name: 'Surakarta'
    },{
      name: 'Malang'
    },{
      name: 'Denpasar'
    },{
      name: 'Mataram'
    },{
      name: 'Kupang'
    },{
      name: 'Bandar Lampung'
    },{
      name: 'Jambi'
    },{
      name: 'Medan'
    },{
      name: 'Palembang'
    },{
      name: 'Banda Aceh'
    },{
      name: 'Batam'
    },{
      name: 'Palangkaraya'
    },{
      name: 'Banjarmasin'
    },{
      name: 'Pontianak'
    }, {
      name: 'Samarinda'
    },{
      name: 'Makassar'
    },{
      name: 'Palu'
    },{
      name: 'Manado'
    },{
      name: 'Ambon'
    },{
      name: 'Jayapura'
    }
    ],{});
  }
};
