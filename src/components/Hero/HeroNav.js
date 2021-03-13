import React, { useContext } from "react"
import Container from "../Container"
import HeroNavMenu from "./HeroNavMenu"
import HeroNavLogo from "./HeroNavLogo"
import HeroNavSearch from "./HeroNavSearch"

const HeroNav = () => {

    return(
        <nav className="heroNav">
            <Container className="container">
                <div className="wrapper">
                    <HeroNavLogo />
                    <HeroNavMenu />
                </div>
                <HeroNavSearch />
            </Container>
        </nav>
    )
}

export default HeroNav;