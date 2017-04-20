var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res){
  db.Contact.findAll({include: [db.Category, db.City], order: '"id" ASC'})
  .then((contacts)=>{
    res.render('index.ejs',{contacts: contacts})
  })
})

module.exports = router;
