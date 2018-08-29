var express = require('express');
var router = express.Router();
var Rad = require('../models').Rad;

router.get('/', function(req, res) {
  Rad.all({
    order: [
      ['createAt', 'ASC']
    ]
  })
    .then( function(radness) {
  return res.render('radness', {radness: radness});
  })
});

router.post('/', function(req, res) {
  var title = req.body.title;
  Rad.create({ title: title})
    .then( function() {
      res.redirect('/radness');
  });
});

router.delete('/:id', function(req, res) {
  Rad.findById(req.params.id)
    .then(function(rad) {
      rad.destroy()
    })
    .then(function() {
      return res.redirect('/radness');
  });
});

router.get('/:id/edit', function(req, res) {
  Rad.findById(req.params.id)
    .then(function(rad) {
      return res.render('edit', {rad: rad});
  });
});

router.put('/', function(req, res) {
  Rad.update(
    {title: req.body.title},
    {where: {id: req.params.id}}
  )
  .then(function() {
    return res.redirect('/radness');
  })
});

module.exports = router;