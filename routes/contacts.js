var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/add', function(req, res){
  db.Category.findAll().then((categories)=>{
    db.City.findAll().then((cities)=>{
    res.render('addcontact.ejs', {categories: categories, cities: cities})  
    })
  })
})
router.post('/add', function(req, res){
  db.Contact.create({
    name: req.body.name,
    description: req.body.description,
    email: req.body.email,
    phone: req.body.phone,
    CategoryId: Number(req.body.CategoryId),
    CityId: Number(req.body.CityId)
  }).then(()=>{
    res.redirect('/')
  })
})
router.get('/delete/:id', function(req,res){
  db.Contact.destroy({where: {id: req.params.id}})
  .then(()=>{
    res.redirect('/')
  })
})
router.get('/update/:id', function(req,res){
  db.Contact.findOne({where: {id: req.params.id}})
  .then((item)=>{
    db.Category.findAll().then((categories)=>{
      db.City.findAll().then((cities)=>{
        res.render('updatecontact.ejs', {item: item, categories: categories, cities: cities})
      })
    })
  })
})
router.post('/update/:id', function(req, res){
  db.Contact.findOne({where: {id: req.params.id}})
  .then((contact)=>{
    contact.updateAttributes({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      phone: req.body.phone,
      CategoryId: Number(req.body.CategoryId),
      CityId: Number(req.body.CityId)
    }).then(()=>{
      res.redirect('/')
    })
  })
})
module.exports = router