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

module.exports = router;