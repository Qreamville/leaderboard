// import React, { useEffect, useState } from "react";
import SingleBoard from "./SingleBoard";

const Board = ({ participantData }) => {
  const leaderBoard = participantData.map((item, _index) => {
    const { id, name, iteration, steps } = item.participant;
    return (
      <tr key={_index}>
        <SingleBoard id={id} name={name} iteration={iteration} steps={steps} />
      </tr>
    );
  });
  return (
    <main className="board">
      <h1>LeaderBoard</h1>
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
    </main>
  );
};

export default Board;
