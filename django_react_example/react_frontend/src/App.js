import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/beta">
      <div>
        <h1>Example routing with react.</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/fksdllakfs">unknown</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<div>This is Homepage</div>} />
          <Route path="/about" element={<div>This is Aboutpage</div>} />
          <Route
            path="*"
            element={
              <div>
                404 not found, the page you are trying to access is not found.
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
