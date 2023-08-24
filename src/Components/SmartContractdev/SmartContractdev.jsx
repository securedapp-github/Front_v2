import React, { useState } from "react";

import AboutUsHero from "../AboutUsHero";
import MeettheTeam from "../MeettheTeam";
import Transmission from "../Transmission";
import Footer from "../Footer";
import FooterInAbout from "../FooterInAbout";
import Navbar from "../Navbar";
import SmartContractDevhero from "../SmartContractdev/SmartContractDevhero";
import SpecialNav from "../SmartContractdev/SpecialNav";
import SmartContractWorkflow from "../SmartContractdev/SmartContractWorkflow";
const SmartContractdev = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <SpecialNav onItemClick={handleMenuItemClick} />
      <SmartContractDevhero />
      <SmartContractWorkflow />
      <Transmission />
      <Footer />
    </>
  );
};

export default SmartContractdev;