// In services/index.js
const AirportService = require("./airport-service");
const CityService = require("./city-service"); // Make sure this path is correct
const CrudService = require("./crud-service");
const FlightService = require("./flight-service");

module.exports = {
  CityService, // Correctly exported as a property
  FlightService,
  AirportService,
  CrudService,
};
