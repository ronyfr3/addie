import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About";
import CompanyPartners from "./pages/CompanyPartners";
import CompanyPhilosophy from "./pages/CompanyPhilosophy";
import CompanyTeam from "./pages/CompanyTeam";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/CompanyPhilosophy"
          component={CompanyPhilosophy}
        />
        <Route exact path="/CompanyTeam" component={CompanyTeam} />
        <Route exact path="/CompanyPartners" component={CompanyPartners} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
