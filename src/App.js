import React from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
