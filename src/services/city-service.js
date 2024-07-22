const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
    }
  }

  async deleteCity(cityid) {
    try {
      const response = await this.cityRepository.deleteCity(cityid);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
    }
  }
  async updateCity(cityid, data) {
    try {
      const response = await this.cityRepository.updateCity(cityid, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
    }
  }
  async getCity(cityid) {
    try {
      const response = await this.cityRepository.getCity(cityid);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
    }
  }
}
