var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  db.Contact.findAll({include: [db.Category, db.City], order: '"id" ASC'})
  .then((contacts)=>{
    res.render('items.ejs', {items: items})
  })
})

module.exports = router;
