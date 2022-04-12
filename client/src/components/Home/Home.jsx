import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterByContinent,
  getAllCountries,
  filterByActivities,
} from "../../redux/action";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import OrderByName from "../Ordinances/OrderByName";
import OrderByPopulation from "../Ordinances/OrderByPopulation";
import Paged from "../Paged/Paged";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchAct, setSearchAct] = useState("");
  const [countriesPerPage] = useState(9);
  const indexLastCountries = currentPage * countriesPerPage;
  const indexFirstCountries = indexLastCountries - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexFirstCountries,
    indexLastCountries
  );

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const totalPages = (pageNumber, e) => {
    setCurrentPage(pageNumber);
    //Resaltar la pagina actual
    let active = "active";
    let desactive = "";
    let li = document.getElementById("listas").childNodes;

    li.forEach((element) => {
      element.className = desactive;
      if (e.target === element) {
        e.target.className = active;
      }
    });
  };
  const handleSelectContinent = (e) => {
    dispatch(FilterByContinent(e.target.value));
    console.log(e.target.value);
  };
  const handleOnchage = (e) => {
    setSearchAct(e.target.value);
  };

  const handleSelectActivities = (e) => {
    //dispatch(filterByActivities(e.target.value));
    e.preventDefault();
    dispatch(filterByActivities(searchAct));
    setSearchAct("");
  };
  return (
    <div className="contenido">
      <Header />
      <h1 className="title-content"> Todos los países</h1>
      <div className="ordinance">
        <div>
          <OrderByName />
        </div>

        <div>
          <OrderByPopulation />
        </div>
        <div className="bycontinent">
          <span>Filtrar por continente: </span>
          <select onChange={handleSelectContinent}>
            <option value={"Todos"}> Todos</option>
            <option value={"Europe"}>Europa</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Oceania"}>Oceania</option>
            <option value={"Africa"}>Africa</option>
            <option value={"Antarctic"}>Antartica</option>
            <option value={"Americas"}>America</option>
          </select>
        </div>
        <div className="acts">
          {/*<select onChange={handleSelectActivities}>
            <option value={"Todos"}>Todos</option>
            <option value={"Acts"}>Solo con actividad</option>
          </select>*/}
          <div>
            <button onClick={handleSelectActivities}>
              <i className="fa fa-search"></i>
            </button>

            <input
              className="input"
              placeholder="Buscar por actividad"
              onChange={handleOnchage}
            />
          </div>
        </div>
      </div>
      <div className="grid">
        {currentCountries?.length > 0 ? (
          currentCountries?.map((co, i) => {
            return (
              <div key={i}>
                <Cards
                  flag={co.flag}
                  name={co.name}
                  continent={co.continent}
                  id={co.id}
                />
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div>
        <Paged
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          totalPages={totalPages}
        />
      </div>
      <div>
        <footer className="pie">
          <h3>Derechos reservados</h3>
        </footer>
      </div>
    </div>
  );
};

export default Home;
