import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Input from "./components/Input";

function App() {
  const [participant, setParticipant] = useState({
    id: "",
    name: "",
    iteration: 0,
    steps: 0,
  });
  const [participantData, setParticipantData] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Input
                participant={participant}
                setParticipant={setParticipant}
                setParticipantData={setParticipantData}
              />
            }
          />
          <Route
            path="/board"
            element={<Board participantData={participantData} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
