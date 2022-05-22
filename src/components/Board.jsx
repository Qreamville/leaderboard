import React, { useEffect, useState } from "react";

const Board = ({ participantData }) => {
  const leaderBoard = participantData.map((item, _index) => {
    const { id, name, iteration, steps } = item.participant;
    return (
      <tr key={_index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{iteration}</td>
        <td>{steps}</td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Iterations</th>
          <th>Steps</th>
        </tr>
      </thead>
      <tbody>{leaderBoard}</tbody>
    </table>
  );
};

export default Board;
