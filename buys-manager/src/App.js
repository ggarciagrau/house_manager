import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import PlatesState from "./contexts/PlatesContext/PlatesState";
import PlatesScreen from "./screens/Plates/PlatesScreen"
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App" style={{ width: "90%", margin: "0 auto" }}>
      <Router>
        <Routes>
          <Route path="/" element={<PlatesState><PlatesScreen /></PlatesState>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
