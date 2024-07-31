const {Flights} = require('../models/index');

class FlightRepository{
    async createFlight(data) {
        try {
          const flight = await Flights.create(data);
          return flight;
        } catch (error) {
          console.error("Validation error details:", error.errors);  // Detailed error logging
          throw new Error(`Unable to create Flight: ${error.message}`);
        }
      }
      
}
module.exports = FlightRepository;