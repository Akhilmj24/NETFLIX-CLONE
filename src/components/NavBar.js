import React, { useEffect, useState } from "react";

export const NavBar = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNavBackground(false);
      } else {
        setShowNavBackground(true);
      }
    });
  }, []);

  return (
    <nav className={`nav ${!showNavBackground && "nav-black"}`}>
    
      <img
        className="nav-logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="NETFLIX"
      />
    </nav>
  );
};
