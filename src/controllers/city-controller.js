const CityService = require("../services/city-service"); // Adjust the path as necessary

// Instantiate the service
const cityService = new CityService();

// Create a new city
const create = async (req, res) => {
  try {
    // Validate input data
    if (!req.body.name) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "City name is required",
        err: {},
      });
    }

    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created city",
      err: {},
    });
  } catch (error) {
    console.error("Error creating city:", error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Error creating city",
      err: error.message,
    });
  }
};

// Delete a city by ID
const destroy = async (req, res) => {
  try {
    const cityId = req.params.id;
    
    if (!cityId) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "City ID is required",
        err: {},
      });
    }

    const success = await cityService.deleteCity(cityId);
    if (!success) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "City not found",
        err: {},
      });
    }

    return res.status(200).json({
      data: null,
      success: true,
      message: "Successfully deleted city",
      err: {},
    });
  } catch (error) {
    console.error("Error deleting city:", error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Error deleting city",
      err: error.message,
    });
  }
};

// Get a city by ID
const get = async (req, res) => {
  try {
    const cityId = req.params.id;

    if (!cityId) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "City ID is required",
        err: {},
      });
    }

    const city = await cityService.getCity(cityId);
    if (!city) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "City not found",
        err: {},
      });
    }

    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched city",
      err: {},
    });
  } catch (error) {
    console.error("Error fetching city:", error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Error fetching city",
      err: error.message,
    });
  }
};

// Update a city by ID
const update = async (req, res) => {
  try {
    const cityId = req.params.id;

    if (!cityId) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "City ID is required",
        err: {},
      });
    }

    if (!req.body.name) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "City name is required for update",
        err: {},
      });
    }

    const result = await cityService.updateCity(cityId, req.body);
    return res.status(200).json({
      data: result,
      success: true,
      message: "Successfully updated city",
      err: {},
    });
  } catch (error) {
    console.error("Error updating city:", error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Error updating city",
      err: error.message,
    });
  }
};

// Get all cities
const getAll = async (req, res) => {
  try {
    
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched all cities",
      err: {},
    });
  } catch (error) {
    console.error("Error fetching all cities:", error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Error fetching all cities",
      err: error.message,
    });
  }
};

// Export the controller functions
module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
