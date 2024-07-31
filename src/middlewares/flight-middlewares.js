const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivaltime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // if any body param is missing come inside the middleware
    return res.status(400).json({
      message: "invalid request body for create flight",
      data: {},
      success: false,
      err: "Missing mandataory properties",
    });
  }

  next();
};
module.exports = {
    validateCreateFlight
}
