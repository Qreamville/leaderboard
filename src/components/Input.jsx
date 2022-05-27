import React from "react";
import { useNavigate } from "react-router-dom";

const Input = ({ participant, setParticipant, setParticipantData }) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setParticipant((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (participant.length !== 10) {
      setParticipantData((prev) => {
        return [...prev, { participant }];
      });
    }
    navigate("/board");
  };

  return (
    <div className="input__main">
      <div className="input__box">
        <div className="title">Welcome</div>
        <div className="subtitle">Input your details!</div>
        <form action="" className="input__form">
          <label htmlFor="id">Id</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Your id"
            name="id"
            value={participant.id}
            onChange={onChange}
          />
          <label htmlFor="name">Full Name</label>
          <input
            placeholder="Enter your full name"
            className="input"
            type="text"
            id="name"
            name="name"
            value={participant.name}
            onChange={onChange}
          />

          <label htmlFor="iteration">iteration</label>
          <input
            placeholder="How many iteration?"
            className="input"
            type="number"
            id="iteration"
            name="iteration"
            min={1}
            max={1}
            value={participant.iteration}
            onChange={onChange}
          />

          <label htmlFor="steps">Steps</label>
          <input
            className="input"
            placeholder="Enter your Steps"
            type="number"
            id="steps"
            name="steps"
            min={500}
            step={500}
            value={participant.steps}
            onChange={onChange}
          />
          <button onClick={handleSubmit}>Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
