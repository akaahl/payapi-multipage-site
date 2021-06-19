import React, { useState } from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";
import MobileNav from "./components/MobileNav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setToggleOpen] = useState(false);

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar isOpen={isOpen} setToggleOpen={setToggleOpen} />
      <AnimatePresence>
        {isOpen && <MobileNav setToggleOpen={setToggleOpen} />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      <FooterNav />
    </div>
  );
}

export default App;
