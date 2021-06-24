import React, { useEffect, useState } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, ismainDiv }) {
  const [films, setFilms] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
console.log(trailerURL)
  const basepicURL = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchURL);
      setFilms(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const ClickImg = (film) => {
    console.log(film)
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(film?.title 
        || "")
      .then( (response) =>{ const urlParams = new URLSearchParams(new URL(response).search)
      setTrailerURL(urlParams.get('v'))} ).catch((err)=>console.log(err))
    }


 
  };

  return (
    <div className="row">
      <h2 className="row-heading">{title}</h2>

      <div className="post-containers">
        {films.map((film) => (
         
            <img
               onClick={() => ClickImg(film)}
              key={film.id}
              className={`post-image ${ismainDiv && "main-div"}`}
              src={`${basepicURL}${
                ismainDiv ? film.poster_path : film.backdrop_path
              }`}
              alt={film.original_title}
            />
         
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts}  />}
    </div>
  );
}

export default Row;
