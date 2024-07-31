const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);

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
