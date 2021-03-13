import React, { useContext } from "react"
import { MovieContext } from "../../context/MovieContext"
import Container from "../Container/index"
import "./styles.css"

const Popular = () => {
    const { popularMovies } = useContext(MovieContext)

    return (
        <div className="popular">
            <Container className="container">
                { popularMovies.results &&
                    popularMovies.results.map ((popularMovieItem, index) => ( 
                    <img
                    key={index} 
                    src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`} 
                    alt="poster" />
                ))}
            </Container>
        </div>            
    )
}

export default Popular;