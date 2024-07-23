// controllers/city-controller.js

const CityService = require('../services/city-service'); // Adjust the path as necessary

// Instantiate the service
const cityService = new CityService(); 

// Create a new city
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body); // Use await for async methods
    return res.status(201).json({
      data: city,
      success: true, 
      message: "Successfully created city", 
      err: {},
    });
  } catch (error) {
    console.log("Error creating city:", error);
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
    const city = await cityService.deleteCity(req.params.id); // Use await for async methods
    return res.status(200).json({
      data: city,
      success: true, 
      message: "Successfully deleted city", 
      err: {}
    });
  } catch (error) {
    console.log("Error deleting city:", error);
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
    const city = await cityService.getCity(req.params.id); // Use await for async methods
    return res.status(200).json({
      data: city,
      success: true, 
      message: "Successfully fetched city", 
      err: {}
    });
  } catch (error) {
    console.log("Error fetching city:", error);
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
    const city = await cityService.updateCity(req.params.id, req.body); // Use await for async methods
    return res.status(200).json({
      data: city,
      success: true, 
      message: "Successfully updated city", 
      err: {}
    });
  } catch (error) {
    console.log("Error updating city:", error);
    return res.status(500).json({
      data: null,
      success: false, 
      message: "Error updating city", 
      err: error.message,
    });
  }
};

// Export the controller functions
module.exports = {
  create,
  destroy,
  get,
  update
};
