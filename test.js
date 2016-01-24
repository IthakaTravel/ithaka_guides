var models = require('./models');

var w = null;

models
.sequelize
.sync()
.then(function createCountry () {
  console.log('Create country');
  return models.Country.create({ name: "Thailand", description: "A beautiful country with beautiful culture", currency: "THB" });
})
.then(function createCity (country) {
  console.log('Create City');
  golbalCountry = country;
  return models.City.create({ name: "Bangkok", description: "Great nightlife", dailySpend: 300, zone: "Center" });
})
.then(function addCityToCountry (city) {
  console.log('Add city to country');
  globalCity = city;
  return golbalCountry.addCity(city);
})
.then(function (country) {
  console.log(country);
});
