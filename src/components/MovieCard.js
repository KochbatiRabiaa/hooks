import React from "react";
import Rating from '../components/Rating'
import "../css/MovieCard.css";

const MovieCard = ({ movie}) => {
  console.log(movie);
  
  return (
    <div className="movie_card" id="bright">
      <img className="locandina" src={movie.poster} alt="" />
     
        <div className="info_section">
          <h1 className='movie' >{movie.title}</h1>
        <div className='info'> <h4>{movie.year}</h4>

          <p className="type">{movie.type}</p>
          <div className="material-icons">
        
        <Rating classname='rate' rate={movie.rate}/>
        </div>
        </div> 
        
        <p className="text">{movie.description}</p>

        
      </div>
    </div>
  );
};

export default MovieCard;
