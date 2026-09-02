import MovieCard from "../componets/MovieCard"
import {useState} from "react"

function Home(){

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
         {id: 1, title: "Jhon Wick", release_data: "2020"},
         {id: 2, title: "Terminator", release_data: "1999"},
         {id: 3, title: "The Matrix", release_data: "1998"},
    
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("-----")
    };

 
    return( 
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" 
                 value ={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button ">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map((movie) => ( 
                    movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard  movie={movie} key={movie.id} />)
                ))}
            </div> 
        </div>
    );
}


export default Home