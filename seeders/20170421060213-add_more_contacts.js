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
    return queryInterface.bulkInsert('Contacts',
    [{
      name: 'CV Kebunku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'contact@kebunku.com',
      phone:'(+62)74693287982',
      CategoryId: 1,
      CityId: 30
    },{
      name: 'UD Qlapa Makmur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'contact@qlapamak.com',
      phone:'(+62)7276382',
      CategoryId: 1,
      CityId: 14
    },{
      name: 'PT Traktor',
      description: 'Usaha yang bergerak di bidang penyediaan tebu mentah, hasil tebu langsung diambil dari kebun kami. Memiliki lahan seluas 250 hektar',
      email:'contact@traktor.com',
      phone:'(+62)384378423',
      CategoryId: 2,
      CityId: 14
    },{
      name: 'PT Mina Jaya Sentosa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'marketing@minajaya.com',
      phone:'+62-235-765-016',
      CategoryId:3,
      CityId: 30
    },{
      name: 'CV Udang Jaya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'contact@udangjaya.com',
      phone:'(+62)3233-333-334',
      CategoryId: 3,
      CityId: 17
    },{
      name: 'PT Bangun Jaya Kokoh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'cs@bangunkokoh.com',
      phone:'+1-202-555-0189',
      CategoryId:5,
      CityId: 4
    },{
      name: 'CV Samudra Jaya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'cs@samudrajaya',
      phone:'+63-68-3725-7368',
      CategoryId:9,
      CityId: 11
    },{
      name: 'PT Rotan Jaya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'cs@rotanjaya.com',
      phone:'+65-676-873-3764',
      CategoryId:10,
      CityId: 27
    },{
      name: 'PT Wahana Air Biru',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'cs@wahanaairbiru.com',
      phone:'+65-676-873-3764',
      CategoryId:11,
      CityId: 7
    }],{})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Contacts', [{
      name: 'CV Kebunku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'contact@kebunku.com',
      phone:'(+62)74693287982',
      CategoryId: 1,
      CityId: 37
    },{
      name: 'UD Qlapa Makmur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non.',
      email:'contact@qlapamak.com',
      phone:'(+62)7276382',
      CategoryId: 1,
      CityId: 40
    }],{})
  }
};
