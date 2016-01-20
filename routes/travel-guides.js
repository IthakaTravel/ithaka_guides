var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/wanderer/add', function(req, res){
  models.Wanderer.create({
    first_name: req.body.first_name,
    last_name:  req.body.last_name,
    email:      req.body.email
  }).then(function(wanderer) {
    return res.json({ result: true, message: 'Wanderer Created', data: wanderer });
  }).catch(function(error) {
    return res.json({ result: false, message: 'Oh no! something went wrong', data: error })
  });
});

module.exports = router;
