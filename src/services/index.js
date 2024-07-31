// In services/index.js
const CityService = require("./city-service"); // Make sure this path is correct
const FlightService = require("./flight-service");

module.exports = {
  CityService, // Correctly exported as a property
  FlightService
};
