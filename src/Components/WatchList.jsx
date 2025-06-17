import { useMovieContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";
import "./WatchList.css";


const WatchList = () => {
  
  const moviesContext = useMovieContext()

  return (

    <div className="watch-list">

      <div className="container">

        <div className="main-heading">

          <h1>My Watchlist</h1>
          <span className="movies-number">
            {moviesContext.watchlist.length} 
            {moviesContext.watchlist.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>

        {moviesContext.watchlist.length > 0 ? (<div className="movie-grid">

          {moviesContext.watchlist.map((movie) => (

            <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
          ))}
        </div>) : (<h2 className="no-movies">No Movies In Your List, Add Some!</h2>)}

      </div>
    </div>
  )
}

export default WatchList