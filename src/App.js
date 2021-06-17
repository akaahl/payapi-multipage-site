import React, { useState } from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";
import MobileNav from "./components/MobileNav";
import { Switch, Route } from "react-router-dom";

function App() {
  const [isOpen, setToggleOpen] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar isOpen={isOpen} setToggleOpen={setToggleOpen} />
      <MobileNav isOpen={isOpen} setToggleOpen={setToggleOpen} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <FooterNav />
    </div>
  );
}

export default App;
