const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.error("Something went wrong in repositry layer");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
