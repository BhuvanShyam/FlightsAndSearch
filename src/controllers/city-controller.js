const { json } = require("sequelize");
const { cityService, cityService } = require("../services/index");
/**
 * POST
 * data - > req.body
 */

const cityService = new cityService();

const create = async (req, res) => {
  try {
    const city = cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      sucess: true,
      message: "sucessfully created city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      sucess: false,
      message: "error creating city",
      err: error,
    });
  }
};

//DELETE = /city/:id
const destroy = async (req, res) => {
  try {
    const city = cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: city,
      sucess: true,
      message: "sucessfully deleted city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      sucess: false,
      message: "error deleting city",
      err: error,
    });
  }
};

//GET = /city/:id
const get = async (req, res) => {
  try {
    const city = cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      sucess: true,
      message: "sucessfully get city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      sucess: false,
      message: "error in fetching city",
      err: error,
    });
  }
};

//patch -> /city/:id - > req.body
const update = async (req, res) => {
  try {
    const city = cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      sucess: true,
      message: "sucessfully updated city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      sucess: false,
      message: "error in updating city",
      err: error,
    });
  }
};
