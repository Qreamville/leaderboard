import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const SingleBoard = ({ id, name, iterations, steps }) => {
  const [iteration, setIteration] = useState(iterations);
  const [step, setStep] = useState(steps);

  const onIncreaseIteration = () => {
    const random = Math.floor(Math.random() * 50);

    setIteration(iteration + 1);
    setStep((prev) => {
      return prev + 500 - random;
    });
  };
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <div className="increase_iteration">
          {iteration} <AiOutlinePlus onClick={onIncreaseIteration} />
        </div>
      </td>
      <td>{step}</td>
    </>
  );
};

export default SingleBoard;
