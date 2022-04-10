import React from "react";
import { useDispatch } from "react-redux";
import { orderByPopulation } from "../../redux/action";
import "./OrderBy.css";

const OrderByPopulation = () => {
  const dispatch = useDispatch();

  const handleSelectPopulation = (e) => {
    dispatch(orderByPopulation(e.target.value));
  };

  return (
    <div className="bypopulation">
      <span>Order por poblacion: </span>
      <select onChange={handleSelectPopulation}>
        <option value={"asc"}>-- Ascendente --</option>
        <option value={"desc"}>-- Descendente --</option>
      </select>
    </div>
  );
};

export default OrderByPopulation;
