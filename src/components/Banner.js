import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../Requests";
export const Banner = () => {
  const [films, setfilms] = useState([]);
 
  
  

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOrginals);
      setfilms(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  

  
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${films?.backdrop_path}")`,
 
      }}
    >
      <div className="banner-text">
     
        <h1 className="banner-heading">
          {films?.title || films?.name || films?.original_title}
        </h1>
        <div className="banner-btns">
       
          <button className="banner-btn" >Play</button>
        

          <button className="banner-btn">My List</button>
          
        
        </div>
        <h1 className="banner-dis">{truncate(films?.overview, 150)}</h1>
      </div>
  <div className="fade"></div>
  <div>
  
  </div>
    </header>
  );
};
