import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/Navbar.jsx";
import First from "./pages/First.jsx";

import Home from "./pages/Home.jsx";
import Mail from "./pages/Mail.jsx";



function App() {



  return (
    <div style={{height:'100%'}}>
      <Mail/>
      {/* <First/> */}
      {/* <Newsletter /> */}
       {/* <NavBar />
      <Home/> */}
      {/* <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/newsletter" component={<Newsletter />} />
        <Route path="/review" component={<Review />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/property-search" component={<PropertySearch />} />
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
