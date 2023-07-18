import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Offers = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#d6cfcf]">
      <h2 className="font-mono text-lg text-center p-52 ">
          No Offers Available Right Now
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
