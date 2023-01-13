import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Newsletter from "./pages/NewsLetter";
import Review from "./pages/Review.jsx";
import Contact from "./pages/Contact.jsx";
import PropertySearch from "./pages/PropertySearch.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home></Home>
      {/* <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/newsletter" component={<Newsletter />} />
        <Route path="/review" component={<Review />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/property-search" component={<PropertySearch />} />
      </Routes> */}
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
