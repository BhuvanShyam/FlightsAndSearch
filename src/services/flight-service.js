const {
  FlightRepository,
  AirplaneRepository,
} = require("../repository/index");
const { compareTime } = require('../utils/helper');

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      // Validate required fields
      if (!data.airplaneId) {
        throw new Error('Airplane ID is required to create a flight');
      }

      // Validate time comparison
      if (compareTime(data.departureTime, data.arrivalTime)) {
        throw new Error('Departure time must be before arrival time');
      }

      // Check if airplane exists
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      if (!airplane) {
        throw new Error(`Airplane with ID ${data.airplaneId} not found`);
      }

      // Create flight
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.error("Error in createFlight:", error);
      throw new Error(`Unable to create flight: ${error.message}`);
    }
  }

  async getFlightData() {
    try {
      // TODO: Implement getFlightData functionality
    } catch (error) {
      console.error("Error in getFlightData:", error);
      throw new Error(`Unable to get flight data: ${error.message}`);
    }
  }
}

module.exports = FlightService;
