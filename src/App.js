import { createContext, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Input from "./components/Input";

export const myContext = createContext();

function App() {
  const [participant, setParticipant] = useState({
    id: "",
    name: "",
    iteration: 1,
    steps: 500,
  });
  const [participantData, setParticipantData] = useState([]);
  return (
    <myContext.Provider value={{ participantData, setParticipantData }}>
      <HashRouter>
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
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
      </HashRouter>
    </myContext.Provider>
  );
}

export default App;
