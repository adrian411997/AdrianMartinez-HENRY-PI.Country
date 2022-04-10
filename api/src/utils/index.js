const axios = require("axios");
const { Country } = require("../db");

const feedingDb = async () => {
  //Codigo par traer los datos a la database
  try {
    const allInformationAPI = (
      await axios.get("https://restcountries.com/v3/all")
    ).data; //Obtenemos los datos de la api
    const fullDb = allInformationAPI.map(async (c) => {
      //Recorremos con map el resultado
      const insertDatabse = {
        name: c.name.common,
        flag: c.flags[0], //Si hay mas de una flag, solo se tomará la primera
        id: c.cca3,
        continent: c.region,
        capital: c.capital ? c.capital[0] : "-",
        subcontinent: c.subregion,
        area: c.area,
        population: c.population,
        maps: c.maps.googleMaps, //Tomaremos solo la direccion de Google
      };
      Country.findOrCreate({
        where: { id: c.cca3 },
        defaults: insertDatabse,
      });
      return insertDatabse;
    });
    return fullDb;
  } catch (error) {
    console.log(error);
  }
};

module.exports = feedingDb;
