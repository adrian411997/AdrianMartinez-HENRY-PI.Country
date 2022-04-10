import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesById } from "../../redux/action";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header-id";
import Footer from "../Footer/Footer";
import "./Detail.css";

const Detail = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  let acts = [];
  if (countries.length > 1) {
    for (var i = 1; i < countries.length; i++) {
      acts.push(countries[i].name);
    }
  }
  console.log(acts);
  console.log(id);
  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Header />
      <h1 className="title-content">Detalles del pais</h1>
      {countries[0] ? (
        <div className="container-detail">
          <div className="tarjeta">
            <div className="tarjeta-image">
              <img
                src={countries[0].flag}
                alt="img not found"
                width="400px"
                heigth="290px"
              />
            </div>

            <div className="tarjeta-text">
              <h3>Pais: {countries[0].name}</h3>
              <h3>Capital: {countries[0].capital}</h3>
              <h3>Continente: {countries[0].continent}</h3>
              <h3>
                Sub-continente:
                {countries[0].subcontinent === null
                  ? " " + countries[0].subcontinent
                  : " Indefinido"}
              </h3>
              <h3>Area: {countries[0].area} KM2</h3>
              <h3>Poblacion: {countries[0].population} habitantes</h3>
              <h3>
                Actividades:
                {acts.length > 1
                  ? acts.map((l) => {
                      return " " + l + ", ";
                    })
                  : "Ninguna actividad"}
              </h3>
              <h3>
                Vista en google: <a href={countries[0].maps}>Google</a>
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
      <div className="before">
        <button onClick={history.goBack}>
          <i className="fas fa-arrow-left">Atras</i>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
