import React, { useContext } from "react"
import { MovieContext } from "../../context/MovieContext"
import Container from "../Container/index"
import Popular from "../Popular/Popular"
import Movies from "../Movies/Movies"
import MoviesPagination from "../Movies/MoviesPagination"
import "./styles.css"

const Output = () => {
    const { activeLink } = useContext(MovieContext)

    return (
        <div className="output">
            { activeLink === "Popular" && (
                <Container className="container">
                    <Popular />
                </Container>
            )}
            { activeLink === "All movies" && (
                <Container className="container">
                    <Movies /> 
                    <MoviesPagination />
                </Container>
            )}
        </div>
    )
}

export default Output