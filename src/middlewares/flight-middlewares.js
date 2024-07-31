const {ClientCodes} = require('../utils/error-codes')

const validateCreateFlight = (req, res, next) => {
  const {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    departureTime,
    arrivalTime,
    price,
  } = req.body;

  if (
    !flightNumber ||
    !airplaneId ||
    !departureAirportId ||
    !arrivalAirportId ||
    !departureTime ||
    !arrivalTime ||
    !price
  ) {
    return res.status(ClientCodes.BAD_REQUEST).json({
      message: "Invalid request body for creating flight",
      data: {},
      success: false,
      err: "Missing mandatory properties",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
