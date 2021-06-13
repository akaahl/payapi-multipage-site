import React from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pricing" component={Pricing} />
      </Switch>
      {/* <Home /> */}
      <FooterNav />
    </div>
  );
}

export default App;
