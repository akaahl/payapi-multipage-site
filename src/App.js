import React from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Home />
      <FooterNav />
    </div>
  );
}

export default App;
