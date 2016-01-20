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
    return res.json({
      result:   true,
      message:  'Wanderer Created',
      data:     wanderer
    });
  }).catch(function(error) {
    return res.json({
      result:   false,
      message: 'Oh no! something went wrong',
      data:     error
    })
  });
});

router.post('/action', function(req, res){
  var wanderer_id = null;
  models.Wanderer.findOne({
    where: { secure_token: req.body.secure_token }
  }).then(function(wanderer){
    wanderer_id = wanderer.ID;
    models.Wanderer_Preference.create({
      Wanderer_ID:  wanderer_id,
      City_ID:      req.body.city_id,
      is_awesome:   req.body.awesome
    }).then(function(wanderer) {
      return res.json({
        result:   true,
        message:  'Good to go!',
        data:     wanderer
      });
    }).catch(function(error) {
      return res.json({
        result:   false,
        message:  'Oh no! something went wrong',
        data:     error
      });
    });
  }).catch(function(error){
    return res.json({
      result:   false,
      message:  'Wanderer not found!',
      data:     error
    });
  });
});

router.get('/serve/:secure_token', function(req, res){
  models.City.findAll()
    .then(function(cards){
      return res.json({
        result:   true,
        message: 'Here you go!',
        data:     cards
      })
    })
    .catch(function(error){
      return res.json({
        result:   false,
        message:  'Something went wrong!',
        data:     error
      });
    })
})

module.exports = router;
