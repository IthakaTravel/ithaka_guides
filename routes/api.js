var express = require('express');
var router = express.Router();

var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Minimal travel guides');
});


router.post('/wanderer/add', function (req, res) {
  var email = req.body.email;
  var name = req.body.name;
  if (!name || !email || email == '' || name == '')
    return res.status(400).json({ result: false, message: "Invalid parameters" });
  models.Wanderer.create({ name: name, email: email, secretToken: "" })
  .then(function (wanderer) {
    return res.status(201).json({ result: true, message: "Success", data: 'http://mtg.ithaka.travel/api/serve/' + wanderer.secretToken });
  })
  .catch(function (error) {
    console.error(error);
    return res.status(500).json({ result: false, message: "Internal server error" });
  });
});


router.get('/serve/:secret_token', function (req, res) {
  var secretToken = req.params['secret_token'];
  models.Wanderer.findOne({ where: { secretToken: secretToken } })
  .then(function (wanderer) {
    if (!wanderer)
      throw { status: 400, message: "No such user" };
    else
      return models.City.findAll({include: [models.Country, models.Tag]});
  })
  .then(function (cities) {
    return res.status(200).json({ result: true, message: "Cities", data: cities });
  })
  .catch(function (error) {
    if (error.status && error.message)
      return res.status(error.status).json({ result: false, message: error.message });
    else
      return res.status(500).json({ result: false, message: "Internal server error" });
  });
});


router.post('/action', function (req, res) {
  var secretToken = req.body.secretToken;
  var cityId = req.body.cityId;
  var likesIt = req.body.likesIt;
  if (!secretToken || !cityId || likesIt == undefined || secretToken == '' || cityId == '')
    return res.status(400).json({ result: false, message: "Invalid parameters" });
  var c = null;
  models.City.findOne({ where: { id: cityId } })
  .then(function (city) {
    if (!city)
      throw { status: 400, message: "Invalid city id" };
    c = city;
    return models.Wanderer.findOne({ where: { secretToken: secretToken } });
  })
  .then(function (wanderer) {
    return wanderer.addCity(c, { likesIt: likesIt });
  })
  .then(function (result) {
    return res.status(201).json({ result: true, message: "Recorded wanderer preference" });
  })
  .catch(function (error) {
    if (error.status && error.message)
      return res.status(error.status).json({ result: false, message: error.message });
    return res.status(500).json({ result: false, message: "Internal server error" });
  });
});

module.exports = router;
