import { React, useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getByName } from "../../redux/action";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(""); //Tiene el valor del input

  const handleOnchage = (e) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(input));
    setInput("");
  };
  return (
    <header>
      <div className="content-header">
        <div className="title">
          <h2>RestAroundYou.com</h2>
        </div>
        <div className="buttons-form">
          <Link to={"/home/create"}>
            <button>Crear Actividad</button>
          </Link>
        </div>
        <div className="buttons">
          <button onClick={handleOnSubmit}>
            <i className="fa fa-search"></i>
          </button>
          <input
            className="input"
            placeholder="Buscar pais"
            onChange={handleOnchage}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
