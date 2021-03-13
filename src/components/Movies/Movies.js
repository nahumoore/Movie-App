import React, { useContext } from "react"
import { MovieContext } from "../../context/MovieContext"
import Container from "../Container/index"
import Loader from "../Loader/index"
import "./styles.css"

const Movies = () => {
    const { movies, isLoading } = useContext(MovieContext)

        return (
            <div className="movies">
                <Container className="container">
                    { movies.results && movies.results.length === 0 &&
                    <h1 className="error">Results not found...</h1>
                    }
                    {   !isLoading ? (
                            movies.results &&
                            movies.results.map( (movieItem, index) => (
                                <img 
                                key={index} 
                                src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`} 
                                alt="poster"
                                />
                            ) )
                    ) : (
                        <Loader/>
                    ) }
                </Container>
            </div>
        )
}

export default Movies;  