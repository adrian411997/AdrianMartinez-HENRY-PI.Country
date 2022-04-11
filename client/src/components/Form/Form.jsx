import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header-id";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import { getAllCountries, postActivities } from "../../redux/action";
import "./Form.css";
const Form = () => {
  const [validate, setValidate] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState(true);
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

  const validation = (form) => {
    let validations = {};
    let regexName = /^[A-Z]+$/i;
    if (!form.name.trim()) {
      validations.name = "El campo esta vacio";
    } else if (!regexName.test(form.name.trim())) {
      validations.name = "El campo solo acepta letras";
    }
    if (!form.name.trim()) {
      validations.difficulty = "El campo esta vacio";
    }
    if (!form.duration.trim()) {
      validations.duration = "El campo esta vacio";
    }
    return validations;
  };

  const handleOnchangeActivity = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setValidate(
      validation({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectCountries = (e) => {
    setForm({
      ...form,
      countries: [...form.countries, e.target.value],
    });
  };

  const handleSelectSeason = (e) => {
    setForm({
      ...form,
      season: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivities(form));

    alert("Tourist activity successfully created");
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    // history.push('/home')
  };

  useEffect(() => {
    if (
      form.name.length > 0 &&
      form.difficulty.length > 0 &&
      form.duration.length > 0 &&
      form.season.length > 0 &&
      form.countries.length > 0
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [form, setError]);

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
              {validate.name && <p className="error">{validate.name}</p>}
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
              {validate.difficulty && (
                <p className="error">{validate.difficulty}</p>
              )}
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
              {validate.duration && (
                <p className="error">{validate.duration}</p>
              )}
            </div>
            <div className="season">
              <label>Temporada: </label>
              <select onChange={handleSelectSeason} name={"season"}>
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
                <button type="submit" disabled={error}>
                  Crear
                </button>
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
