import React from "react"
import "./App.css";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import Row from "./components/Row";
import requests from "./Requests";


function App() {
  return (
      
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="TREND" fetchURL={requests.fetchTrending} ismainDiv />
      <Row title="Science Fiction" fetchURL={requests.fetchScienceFiction} />
      <Row title="Action" fetchURL={requests.fetchAction} />
      <Row title="Adventure" fetchURL={requests.fetchAdventure} />
      <Row title="Animation" fetchURL={requests.fetchAnimation} />
      <Row title="Fantasy" fetchURL={requests.fetchFantasy} />
      <Row title="Horror" fetchURL={requests.fetchHorror} />
      <Row title="Mystery" fetchURL={requests.fetchMystery} />
      <Row title="Romance" fetchURL={requests.fetchRomance} />
      <Row title="Crime" fetchURL={requests.fetchCrime} />
      <Row title="Family" fetchURL={requests.fetchFamily} />
      
       
     
      
     
      
    </div>
     
  );
}

export default App;
