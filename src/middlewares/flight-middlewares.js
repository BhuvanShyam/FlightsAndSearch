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
    return res.status(400).json({
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
