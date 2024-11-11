import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../Components/About";

function Aboutbookstore() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow"> {/* This ensures the About section takes the remaining space */}
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default Aboutbookstore;
