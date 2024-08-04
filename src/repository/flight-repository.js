const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }
    // if (data.minPrice) {
    //   filter.price = {
    //     [Op.gte]: parseFloat(data.minPrice),
    //   };
    // }
    // if (data.maxPrice) {
    //   filter.price = {
    //     [Op.lte]: parseFloat(data.maxPrice),
    //   };
    // }

    let priceFilter = [];
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: parseFloat(data.minPrice) } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: parseFloat(data.maxPrice) } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });

    console.log(filter);

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.error("Validation error details:", error.errors); // Detailed error logging
      throw new Error(`Unable to create Flight: ${error.message}`);
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.error("Error fetching flight:(repository)", error);
      throw new Error(`Unable to fetch Flight: ${error.message}`);
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.error("Error fetching flights:(repository)", error);
      throw new Error(`Unable to fetch Flights: ${error.message}`);
    }
  }

  async updateFlights(flightId, data) {
    try {
      const [affectedRows] = await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      console.log(`Number of affected rows: ${affectedRows}`);
      return affectedRows > 0; // Return true if rows were affected
    } catch (error) {
      console.error("Error updating flight:(repository)", error);
      throw new Error(`Unable to update Flight: ${error.message}`);
    }
  }
}

module.exports = FlightRepository;
