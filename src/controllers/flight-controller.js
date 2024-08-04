const { FlightService } = require("../services/index");
const {
  ClientCodes,
  SuccessCodes,
  ServerCodes,} = require("../utils/error-codes");
const flightService = new FlightService();

const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

const create = async (req, res) => {
  const {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    departureTime,
    arrivalTime,
    price,
  } = req.body;

  if (!isValidDate(departureTime) || !isValidDate(arrivalTime)) {
    return res.status(ClientCodes.BAD_REQUEST).json({
      data: null,
      success: false,
      message: "Invalid date-time strings provided",
      err: "Unable to createFlight: Invalid date-time strings provided.",
    });
  }

  const flightRequestData = {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    departureTime: new Date(departureTime),
    arrivalTime: new Date(arrivalTime), // Corrected typo here
    price: parseFloat(price),
  };

  console.log("Flight Request Data:", flightRequestData); // Log the flight request data

  try {
    const flight = await flightService.createFlight(flightRequestData);

    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      message: "Flight created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Error creating flight:", error);
    return res.status(ServerCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Error creating flight",
      err: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const filter = {
      minPrice: parseFloat(req.query.minprice),
      arrivalAirportId: req.query.arrivalAirportId,
      departureAirportId: req.query.departureAirportId,
    };

    const response = await flightService.getAllFlightData(filter);

    return res.status(SuccessCodes.OK).json({
      data: response,
      message: "Flight data retrieved successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Error getting all flights:", error);
    return res.status(ServerCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Error getting flights",
      err: error.message,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);

    return res.status(SuccessCodes.OK).json({
      data: response,
      message: "Flight data retrieved successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Error getting  flight:", error);
    return res.status(ServerCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Error getting flight detail",
      err: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      message: "Flight data upadated successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Error getting  flight:", error);
    return res.status(ServerCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Not able to update flight",
      err: error.message,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
