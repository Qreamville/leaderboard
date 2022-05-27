import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleBoard = ({ id, name, iteration, steps }) => {
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <div className="increase_iteration">
          <AiOutlineMinus /> {iteration} <AiOutlinePlus />
        </div>
      </td>
      <td>{steps}</td>
    </>
  );
};

export default SingleBoard;
