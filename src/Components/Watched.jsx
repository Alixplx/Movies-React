import { useMovieContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Watched.css"

const Watched = () => {
  
  const moviesContext = useMovieContext()

  return (

    <div className="watched">

      <div className="container">

        <div className="main-heading">

          <h1>My Watched</h1>
          <span className="movies-number">

            {moviesContext.watched.length}
            {moviesContext.watched.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>

        {moviesContext.watchlist.length > 0 ? (<div className="movie-grid">

          {moviesContext.watched.map((movie) => (

            <MovieCard key={movie.imdbID} movie={movie} type="watched" />
          ))}
        </div>) : (<h2 className="no-movies">No Movies In Your List, Add Some!</h2>)}

      </div>
    </div>
  
  )
}

export default Watched