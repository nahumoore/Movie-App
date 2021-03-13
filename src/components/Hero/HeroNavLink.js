import React, { useContext } from "react"
import { MovieContext } from "../../context/MovieContext"
import "./styles.css"

const HeroNavLink = ({ btnText }) =>{
    const {  activeLink, setActiveLink } = useContext(MovieContext)

    return (
    <button  
    onClick={ () => {
        setActiveLink(btnText)
    }}
    className="heroNavLink"
    style={{ color: activeLink === btnText ? "#f9a5ff" : "#fff"}}
    >{ btnText }</button>
    )
}

export default HeroNavLink;