import { useMovieContext } from "../context/GlobalContext";
import "./ResultsCard.css";
import * as actions from "../context/ActionTypes";


const ResultsCard = ({movie}) => {
    
    const movieContext = useMovieContext()
    const storedWatchlisMovie = movieContext.watchlist.find((film) => film.imdbID === movie.imdbID)
    const storedWatchedMovies = movieContext.watched.find((film) => film.imdbID === movie.imdbID)

    const watchListDisabled = storedWatchlisMovie ? true : storedWatchedMovies ? true : false
    const watchedDisabled = storedWatchedMovies ? true : false


    return (
    
        <div className="result-card">
            
            <div className="poster-wrapper">
                
                {movie.Poster ? <img src={movie.Poster} alt={movie.Title}/> : <div className="filter-poster"></div>}
            </div>

            <div className="info">

                <div className="heading">

                    <h3 className="title">{movie.Title}</h3>
                    {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
                </div>
            
                <div className="controls">

                    <button className="btn" disabled={watchListDisabled} onClick={() => movieContext.MoviesDisPatch(

                        {type: actions.ADD_MOVIE_TO_WATCHLIST, payload: movie}
                    )}>Add To WatchList</button>
                    
                    <button className="btn" disabled={watchedDisabled} onClick={() => movieContext.MoviesDisPatch(

                        {type: actions.ADD_MOVIE_TO_WATCHED, payload: movie}
                    )}>Add To Watched</button>
                </div>
            </div>

        </div>
    )
}

export default ResultsCard