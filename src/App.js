import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Searching from "./components/Searching";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([
    {
      title: "The Avengers",
      year: "2012",
      rate: 4,
      type: "Sci-Fi",
      description:
        "Est aute mollit nulla consectetur culpa velit est. Ea sunt tempor duis exercitation minim anim fugiat ut dolore.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      title: "The Avengers 2",
      year: "1998",
      rate: "4",
      type: "action | drama",
      description:
        "Est aute mollit nulla consectetur culpa velit est. Ea sunt tempor duis exercitation minim anim fugiat ut dolore.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },

    {
      title: "Ultimate Avengers: The Movie",
      year: "2006",
      rate: "2",
      type: "action",
      description:
        "Est aute mollit nulla consectetur culpa velit est. Ea sunt tempor duis exercitation minim anim fugiat ut dolore. ",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
    },
    {
      title: "The Avengers",
      year: "1961",
      rate: "5",
      type: "action|Sci-Fi",
      description:
        "Est aute mollit nulla consectetur culpa velit est. Ea sunt tempor duis exercitation minim anim fugiat ut dolore.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      title: "The New Avengers",
      year: "1977",
      rate: "3",
      type: "adventure",
      description:
        "Est aute mollit nulla consectetur culpa velit est. Ea sunt tempor duis exercitation minim anim fugiat ut dolore.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTIwNDg4NzE1N15BMl5BanBnXkFtZTcwNTIwMDYyMQ@@._V1_SX300.jpg",
    },
    {
      title: "Marvel Disk Wars: The Avengers",
      year: "2015",
      rate: 3,
      type: "action | drama",
      description:
        "Est aute mollit nulla consectetur culpa velit est. Ea sunt tempor duis exercitation minim anim fugiat ut dolore.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDZmYjNmYTktNDVjMi00N2I0LWI0MjEtNzEyYzYzZjU5MGEwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
  ]);



  
  const addMovie = (x) => {
    setMovies([...movies, x]);
  };

  const [searchByName, setSearchByName] = useState("");


  const [searchByRate, setSearchByRate]=useState("1")

  return (
    <div>
      <Searching setSearchByName={setSearchByName} 
                 searchByRate={searchByRate} 
                 setSearchByRate={setSearchByRate}/>
      <MovieList movies={movies} 
                 searchByName={searchByName} 
                 searchByRate={searchByRate}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddMovie addMovie={addMovie} />
      </div>
    </div>
  );
}

export default App;
