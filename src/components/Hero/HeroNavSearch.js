import React, { useContext } from "react"
import { MovieContext } from "../../context/MovieContext"
import "./styles.css"

const HeroNavSearch = () => {
    const { search, setSearch, handleSearch, activeLink } = useContext(MovieContext)

    return(
        <form className="heroNavSearch" onSubmit={handleSearch }>
            { activeLink !== "Popular" && (
            <input 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            type="text" 
            placeholder="Search for movies..."
            className="inputSearch"
            />
            ) }
        </form>
    )
}

export default HeroNavSearch;