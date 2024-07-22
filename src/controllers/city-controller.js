const { CityService } = require("../services/index");
/**
 * POST
 * data - > req.body
 */

const cityService = new CityService(); // Correctly instantiate CityService

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
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false, 
      message: "Error creating city", 
      err: error,
    });
  }
};

// DELETE = /city/:id
const destroy = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.params.id); // Use await for async methods
    return res.status(200).json({
      data: city,
      success: true, 
      message: "Successfully deleted city", 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false, 
      message: "Error deleting city", 
      err: error,
    });
  }
};

// GET = /city/:id
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id); // Use await for async methods
    return res.status(200).json({
      data: city,
      success: true, 
      message: "Successfully fetched city", 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false, 
      message: "Error fetching city", 
      err: error,
    });
  }
};

// PATCH = /city/:id -> req.body
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body); // Use await for async methods
    return res.status(200).json({
      data: city,
      success: true, 
      message: "Successfully updated city", 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false, 
      message: "Error updating city", 
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update
};
