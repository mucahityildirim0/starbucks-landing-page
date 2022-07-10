import React from "react";
import Navbar from "./components/Navbar";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Boxes />
      <Footer />
    </div>
  );
};

export default App;
