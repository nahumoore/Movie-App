import React, { useContext } from "react"
import HeroNavLink from "./HeroNavLink"
import { MovieContext } from "../../context/MovieContext"
import "./styles.css"

const HeroNavMenu = () => {
    const { hiddenMenu } = useContext(MovieContext)

    return(
        <div className="heroNavMenu">
            <HeroNavLink btnText="Popular" />
            <HeroNavLink btnText="All movies" />
        </div>
    )
}

export default HeroNavMenu;