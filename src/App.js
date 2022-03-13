import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import "./static/css/styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
