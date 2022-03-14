import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import "./static/css/styles.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
