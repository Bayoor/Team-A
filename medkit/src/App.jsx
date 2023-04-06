import  React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import Review from "./components/review/Review";
import Homepage from "./pages/homepage/Homepage";


function App() {
  return (
    <div className="App">
      <Navbar />
       <Homepage />
      {/* <Review /> */}
      
      
      
    </div>
  );
}

export default App;
