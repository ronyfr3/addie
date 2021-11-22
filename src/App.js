import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import CompanyTeam from "./pages/ComapnyTeam";
import CompanyPhilosophy from "./pages/ComapnyPhilosophy";
import CompanyPartners from "./pages/CompanyPartners";

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/CompanyPhilosophy"
          element={<CompanyPhilosophy />}
        />
        <Route exact path="/CompanyTeam" element={<CompanyTeam />} />
        <Route exact path="/CompanyPartners" element={<CompanyPartners />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
