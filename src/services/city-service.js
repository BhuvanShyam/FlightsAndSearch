const CityRepository = require("../repository/city-repository"); // Adjust the path as necessary

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      // Validate input data (e.g., ensure 'name' is provided)
      if (!data.name) {
        throw new Error("City name is required");
      }

      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.error("Error in createCity:", error);
      throw new Error(`Unable to create city: ${error.message}`);
    }
  }

  async deleteCity(cityId) {
    try {
      // Validate input
      if (!cityId) {
        throw new Error("City ID is required");
      }

      const response = await this.cityRepository.deleteCity({ cityid: cityId });
      if (!response) {
        throw new Error("City not found");
      }
      return response;
    } catch (error) {
      console.error("Error in deleteCity:", error);
      throw new Error(`Unable to delete city: ${error.message}`);
    }
  }

  async updateCity(cityId, data) {
    try {
      // Validate input
      if (!cityId) {
        throw new Error("City ID is required");
      }
      if (!data.name) {
        throw new Error("City name is required for update");
      }

      const success = await this.cityRepository.updateCity({
        cityid: cityId,
        data,
      });

      if (!success) {
        throw new Error("City not found or no changes made");
      }
      return { success: true, message: "City updated successfully" };
    } catch (error) {
      console.error("Error in updateCity:", error);
      throw new Error(`Unable to update city: ${error.message}`);
    }
  }

  async getCity(cityId) {
    try {
      // Validate input
      if (!cityId) {
        throw new Error("City ID is required");
      }

      const city = await this.cityRepository.getCity(cityId);
      if (!city) {
        throw new Error("City not found");
      }
      return city;
    } catch (error) {
      console.error("Error in getCity:", error);
      throw new Error(`Unable to get city: ${error.message}`);
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.error("Error in getAllCities:", error);
      throw new Error(`Unable to fetch cities: ${error.message}`);
    }
  }
}

module.exports = CityService; // Ensure correct export
