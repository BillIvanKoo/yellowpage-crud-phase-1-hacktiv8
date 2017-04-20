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
router.post('/delete/:id', function(req,res){
  db.Contact.destroy({where: {id: req.params.id}})
  .then(()=>{
    res.redirect('/')
  })
})
router.get('/update/:id', function(req,res){
  db.Contact.findOne({where: {id: req.params.id}})
  .then((contact)=>{
    db.Category.findAll().then((categories)=>{
      db.City.findAll().then((cities)=>{
        res.render('updatecontact.ejs', {contact: contact, categories: categories, cities: cities})
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
router.get('/business/:id', function(req, res){
  db.Contact.findOne({where: {id: req.params.id}, include: [db.Category, db.City]})
  .then((contact)=>{
    res.render('business.ejs', {contact:contact})
  })
})
router.get('/search', function(req, res){
  res.render('search.ejs')
})
router.post('/search/keyword', function(req, res){
  let value = req.body.value
  db.Category.findAll().then((categories)=>{
    db.City.findAll().then((cities)=>{
      res.render('keyword.ejs', {value: value, categories: categories, cities: cities})
    })
  })
})
router.post('/list/:value', function(req,res){
  if(req.params.value==="City"){
    db.Contact.findAll({where: {name: {like: '%'+req.body.keyword+'%'}, CityId: req.body.value}, include: [db.Category, db.City]})
    .then((contacts)=>{
      res.render('list.ejs', {contacts:contacts})
    })
  }
  if(req.params.value==="Category"){
    db.Contact.findAll({where: {name: {like: '%'+req.body.keyword+'%'}, CategoryId: req.body.value}, include: [db.Category, db.City]})
    .then((contacts)=>{
      res.render('list.ejs', {contacts:contacts})
    })
  }
})
module.exports = router