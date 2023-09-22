import { Container, MovieList, Movie } from "./style";
import { useState, useEffect } from "react";


function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6fbc07760a3d3f9d3a49b81884939815&language=en-US&page=1`)
        
        .then(response => response.json())
        .then(data => setMovies(data.results))

    }, [])
   
    return (
        <Container>
            <h1>Popular Movies</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                        <a href="https://google.com.br"><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></a>
                        <span>{movie.title}</span>
                    </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )

}

export default Home;