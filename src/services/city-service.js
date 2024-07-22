// services/city-service.js

const CityRepository = require('../repository/city-repository'); // Adjust the path as necessary

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.error("Error in createCity:", error);
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.error("Error in deleteCity:", error);
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const response = await this.cityRepository.updateCity(cityId, data);
      return response;
    } catch (error) {
      console.error("Error in updateCity:", error);
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const response = await this.cityRepository.getCity(cityId);
      return response;
    } catch (error) {
      console.error("Error in getCity:", error);
      throw error;
    }
  }
}

module.exports = CityService; // Ensure correct export
