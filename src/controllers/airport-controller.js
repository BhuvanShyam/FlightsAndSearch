const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    res.status(201).json({
      message: "Airport created successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.send(500).json({
      data: {},
      success: false,
      message: "Error creating airport in controller",
      error: error,
    });
  }
};

module.exports = {
    create
};
