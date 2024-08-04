const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!data.airplaneId) {
        throw new Error("Airplane ID is required to create a flight");
      }

      // Ensure correct comparison for departure and arrival times
      if (compareTime(data.departureTime, data.arrivalTime)) {
        throw new Error("Departure time must be before arrival time");
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      if (!airplane) {
        throw new Error(`Airplane with id ${data.airplaneId} not found`);
      }

      // Create flight with additional totalSeats from airplane capacity
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.error("Error in createFlight:", error);
      throw new Error(`Unable to createFlight: ${error.message}`);
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.error("Error in getAllFlightData:", error);
      throw new Error(`Unable to get flight data: ${error.message}`);
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.error("Error in getFlight:", error);
      throw new Error(`Unable to get flight: ${error.message}`);
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlights(
        flightId,
        data
      );
      return response;
    } catch (error) {
      console.error("Error in updateFlight:", error);
      throw new Error(`Unable to update flight: ${error.message}`);
    }
  }
}

module.exports = FlightService;
