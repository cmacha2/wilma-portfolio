import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";



function App() {



  return (
    <React.Fragment>
      {/* <Newsletter /> */}
       <NavBar />
      <Home/>
      {/* <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/newsletter" component={<Newsletter />} />
        <Route path="/review" component={<Review />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/property-search" component={<PropertySearch />} />
      </Routes> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
