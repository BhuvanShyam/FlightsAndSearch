const { where } = require("sequelize");
const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      if (!name) {
        throw new Error("City name is required");
      }
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.error("Error creating city:", error.message);
      throw new Error(`Unable to create city: ${error.message}`);
    }
  }

  async deleteCity({ cityid }) {
    try {
      if (!cityid) {
        throw new Error("City ID is required");
      }
      const deletionCount = await City.destroy({ where: { id: cityid } });
      if (deletionCount === 0) {
        throw new Error("City not found");
      }
      return true;
    } catch (error) {
      console.error("Error deleting city:", error.message);
      throw new Error(`Unable to delete city: ${error.message}`);
    }
  }

  async updateCity({ cityid, data }) {
    try {
      if (!cityid) {
        throw new Error("City ID is required");
      }
      if (!data.name) {
        throw new Error("City name is required for update");
      }

      const city = await City.findByPk(cityid);
      if (!city) {
        throw new Error("City not found");
      }

      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.error("Error updating city:", error.message);
      throw new Error(`Unable to update city: ${error.message}`);
    }
  }

  async getCity({ cityid }) {
    try {
      if (!cityid) {
        throw new Error("City ID is required");
      }

      const city = await City.findByPk(cityid);
      if (!city) {
        throw new Error("City not found");
      }
      return city;
    } catch (error) {
      console.error("Error fetching city:", error.message);
      throw new Error(`Unable to get city: ${error.message}`);
    }
  }

  async getAllCities(filter) {
    //filter can be empty also
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.error("Error fetching all cities:", error.message);
      throw new Error(`Unable to fetch cities: ${error.message}`);
    }
  }
}

module.exports = CityRepository;
