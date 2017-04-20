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
      name: 'CV Tanam Manis Jaya',
      description: 'Usaha yang bergerak di bidang penyediaan tebu mentah, hasil tebu langsung diambil dari kebun kami. Memiliki lahan seluas 250 hektar',
      email:'contact@tanammanis.com',
      phone:'(+62)343564095',
      CategoryId: 1,
      CityId: 14
    },{
      name: 'UD Agropolis ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@agropolis.com',
      phone:'+1-202-555-0196',
      CategoryId: 2 ,
      CityId: 16
    },{
      name: 'PT Mina Jaya Sentosa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'marketing@minajaya.com',
      phone:'+1-202-555-0196',
      CategoryId:3,
      CityId: 30
    },{
      name: 'CV Barokah Sejahtra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'customer@barokahsejahtera.com',
      phone:'+1-202-555-0196',
      CategoryId:4,
      CityId: 24
    },{
      name: 'PT Bangun Jaya Kokoh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@bangunkokoh.com',
      phone:'+1-202-555-0196',
      CategoryId:5,
      CityId: 4
    },{
      name: 'CV Mobilku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@mobilku.com',
      phone:'+1-202-555-0196',
      CategoryId:6,
      CityId: 22
    },{
      name: 'PT Rits Calton Hotel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'bussines@ritscalton.com',
      phone:'+1-202-555-0196',
      CategoryId:7,
      CityId: 20
    },{
      name: 'CV Kilau Berlian',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@kilaulian.com',
      phone:'+1-202-555-0196',
      CategoryId:8,
      CityId: 19
    },{
      name: 'CV Laut Biru Makmur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@lautbiru.com',
      phone:'+1-202-555-0196',
      CategoryId:9,
      CityId: 11
    },{
      name: 'PT Forestra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@forestra.com',
      phone:'+1-202-555-0196',
      CategoryId:10,
      CityId: 29
    }],{})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Contacts',
    [{
      name: 'CV Tanam Manis Jaya',
      description: 'Usaha yang bergerak di bidang penyediaan tebu mentah, hasil tebu langsung diambil dari kebun kami. Memiliki lahan seluas 250 hektar',
      email:'contact@tanammanis.com',
      phone:'(+62)343564095',
      CategoryId: 1,
      CityId: 14
    },{
      name: 'UD Agropolis ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@agropolis.com',
      phone:'+1-202-555-0196',
      CategoryId: 2 ,
      CityId: 16
    },{
      name: 'PT Mina Jaya Sentosa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'marketing@minajaya.com',
      phone:'+1-202-555-0196',
      CategoryId:3,
      CityId: 30
    },{
      name: 'CV Barokah Sejahtra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'customer@barokahsejahtera.com',
      phone:'+1-202-555-0196',
      CategoryId:4,
      CityId: 24
    },{
      name: 'PT Bangun Jaya Kokoh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@bangunkokoh.com',
      phone:'+1-202-555-0196',
      CategoryId:5,
      CityId: 4
    },{
      name: 'CV Mobilku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@mobilku.com',
      phone:'+1-202-555-0196',
      CategoryId:6,
      CityId: 22
    },{
      name: 'PT Rits Calton Hotel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'bussines@ritscalton.com',
      phone:'+1-202-555-0196',
      CategoryId:7,
      CityId: 20
    },{
      name: 'CV Kilau Berlian',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@kilaulian.com',
      phone:'+1-202-555-0196',
      CategoryId:8,
      CityId: 19
    },{
      name: 'CV Laut Biru Makmur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@lautbiru.com',
      phone:'+1-202-555-0196',
      CategoryId:9,
      CityId: 11
    },{
      name: 'PT Forestra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis urna odio, ac consequat purus finibus non. Cras at elit eget purus ornare rutrum ac posuere sem. Ut nec nunc tempus, tempus massa ac, bibendum arcu. Nunc et magna quis dolor iaculis semper.',
      email:'cs@forestra.com',
      phone:'+1-202-555-0196',
      CategoryId:10,
      CityId: 29
    }],{})
  }
};
