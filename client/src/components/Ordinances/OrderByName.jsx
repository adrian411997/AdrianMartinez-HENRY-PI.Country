import React from "react";
import { useDispatch } from "react-redux";
import { orderByName, setOrder, setPage } from "../../redux/action";
import "./OrderBy.css";

const OrderByName = () => {
  const dispatch = useDispatch();

  const handleSelectName = (e) => {
    dispatch(orderByName(e.target.value));
    dispatch(setPage(1));
    dispatch(setOrder(`order ${e.target.value}`));
  };

  return (
    <div className="byname">
      <span>Ordenar por nombre: </span>
      <select onChange={handleSelectName}>
        <option value={"asc"}>-- Ascendente --</option>
        <option value={"desc"}>-- Descendente --</option>
      </select>
    </div>
  );
};

export default OrderByName;
