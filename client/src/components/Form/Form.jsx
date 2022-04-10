import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header-id";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import { getAllCountries, postActivities } from "../../redux/action";
import "./Form.css";
const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state);
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleOnchangeActivity = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectCountries = (e) => {
    setForm({
      ...form,
      countries: [...form.countries, e.target.value],
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    let valores = Object.values(form);
    if (valores.includes("")) {
      alert("Hay campos que faltan completar");
    } else {
      dispatch(postActivities(form));
      alert("Tourist activity successfully created");
      setForm({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
    }
  };
  return (
    <div>
      <Header />
      <h2 className="title-content">
        Este es un formulario para crear actividades turisticas en paises
        especificos
      </h2>
      <form onSubmit={handleOnSubmit}>
        <div className="formulario-area">
          <div className="formulario-cuerpo">
            <div className="title-form">
              <h1>Crear Actividad</h1>
            </div>
            <div className="name">
              <label>Nombre de la actividad </label>
              <input
                type={"text"}
                placeholder={"name"}
                name={"name"}
                value={form.name}
                onChange={handleOnchangeActivity}
              />
            </div>
            <div className="difficulty">
              <label>Dificultad: </label>
              <input
                type={"number"}
                min="1"
                max="5"
                placeholder={"difficulty"}
                name={"difficulty"}
                value={form.difficulty}
                onChange={handleOnchangeActivity}
              />
            </div>
            <div className="duration">
              <label>Duracion: </label>
              <input
                type={"number"}
                min="1"
                max="8"
                placeholder={"duration"}
                name={"duration"}
                value={form.duration}
                onChange={handleOnchangeActivity}
              />
            </div>
            <div className="season">
              <label>Temporada: </label>
              <select onChange={handleOnchangeActivity} name={"season"}>
                <option value={""}>Elija una temporada</option>
                <option value={"Invierno"}>Invierno</option>
                <option value={"Primavera"}>Primavera</option>
                <option value={"Otoño"}>Otoño</option>
                <option value={"Verano"}>Verano</option>
              </select>
            </div>
            <div className="country">
              <label>Pais: </label>
              <select onChange={handleSelectCountries} name={"countries"}>
                <option value={""}>Selecciona un pais</option>
                {allCountries.map((coun) => (
                  <option key={coun.id} value={coun.name}>
                    {coun.name}
                  </option>
                ))}
              </select>
              <ul>
                <p>Paises seleccionados:</p>
                <li>{form.countries.map((el) => el + ", ")}</li>
              </ul>
              <div className="button">
                <button type="submit">Crear</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="before">
        <button onClick={history.goBack}>
          <i className="fas fa-arrow-left">Atras</i>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
