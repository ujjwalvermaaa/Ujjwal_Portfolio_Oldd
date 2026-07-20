import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import Achievements from "./Achievements";
import TechStack from "./TechStack";

const MainContainer = () => {
  useEffect(() => {
    setSplitText();
    window.addEventListener("resize", setSplitText);
    return () => window.removeEventListener("resize", setSplitText);
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <TechStack />
            <Achievements />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
