const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    // Extract parameters from query string
    const {
      flightNumber,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      arrivaltime,
      departureTime,
      price,
    } = req.query;

    // Check if all required parameters are provided
    if (
      !flightNumber ||
      !airplaneId ||
      !departureAirportId ||
      !arrivalAirportId ||
      !arrivaltime ||
      !departureTime ||
      !price
    ) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "Missing required parameters",
        err: "All parameters are required to create a flight",
      });
    }

    // Create flight object
    const flightData = {
      flightNumber,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      arrivaltime: new Date(arrivaltime),
      departureTime: new Date(departureTime),
      price: parseInt(price, 10),
    };

    const flight = await flightService.createFlight(flightData);

    return res.status(201).json({
      data: flight,
      message: "Flight created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Error creating flight:", error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Error creating flight",
      err: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    // Extract filter parameters from query string
    const filter = {
      minPrice: parseFloat(req.query.minprice),
      arrivalAirportId: req.query.arrivalAirportId,
      departureAirportId: req.query.departureAirportId,
    };

    const response = await flightService.getAllFlightData(filter);

    return res.status(200).json({
      data: response,
      message: "Flight data retrieved successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Error getting all flights: in controller", error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Error getting flights in controller",
      err: error.message,
    });
  }
};

module.exports = {
  create,
  getAll,
};
