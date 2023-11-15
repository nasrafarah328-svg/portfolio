import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#FFFDFA",
        
      }}
    >
      <Router>
        <Navbar />
        <AnimatedRoutes />
        </Router>
    </div>
  );
}

export default App;
