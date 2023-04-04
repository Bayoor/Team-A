import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hompage from "./pages/homepage/Hompage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hompage />
    </div>
  );
}

export default App;
