var express = require('express');
var router = express.Router();
var db = require('../models');
router.get('/add', function(req, res){
  res.render('addcategory.ejs')
})

router.post('/add', function(req, res){
  db.Category.create({
    name: req.body.name
  }).then(()=>{
    res.redirect('/')
  })
})
router.get('/delete', function(req, res){
  db.Category.findAll({order: '"id" ASC'}).then((categories)=>{
    res.render('choosecategory.ejs', {title: "Delete Category", action: "delete", categories: categories})
  })
})
router.post('/delete', function(req,res){
  db.Category.destroy({where: {id: req.body.id}})
  .then(()=>{
    res.redirect('/')
  })
})
router.get('/update', function(req,res){
  db.Category.findAll({order: '"id" ASC'}).then((categories)=>{
    res.render('choosecategory.ejs', {title: "Update Category", action: "update", categories: categories})
  })
})
router.post('/update', function(req, res){
  db.Category.findOne({where: {id: req.body.id}}).then((category)=>{
    res.render('updatecategory.ejs', {category: category})
  })
})
router.post('/update/:id', function(req, res){
  db.Category.findOne({where: {id: req.params.id}}).then((category)=>{
    category.updateAttributes({
      name: req.body.name
    }).then(()=>{
      res.redirect('/')
    })
  })
})
module.exports = router;