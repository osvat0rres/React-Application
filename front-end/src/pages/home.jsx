import MovieCard from "../componets/MovieCard"

function Home(){

    const movies = [
         {id: 1, title: "Jhon Wick", release_data: "2020"},
         {id: 2, title: "Terminator", release_data: "1999"},
         {id: 3, title: "The Matrix", release_data: "1998"},
    
    ]

    const handleSearch = () => {

    }


    return( 
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard  movie={movie} key={movie.id} />
                ))}
            </div> 
        </div>
    );
}


export default Home