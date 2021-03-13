import React, { useContext } from "react"
import Container from "../Container/index"
import { MovieContext } from "../../context/MovieContext"
import "./styles.css"

const MoviesPagination = () => {
    const { newPage, currentPage, showPagination } = useContext (MovieContext)

    return(
        <div className="moviesPagination">
            { showPagination && (
                <Container className="container">
                    <button 
                    className="btnPagination"
                    onClick={ () => newPage("previous")}
                    style={{
                        cursor: currentPage !== 1 ? "pointer" : "not-allowed",
                        background: currentPage !== 1 ? "#32de57" : "#303847"
                    }}
                    >Prev Page</button>
                    <button className="btnPagination" onClick={ () => newPage("next")}>Next Page</button>
                </Container>
            )}
        </div>
    )
}

export default MoviesPagination