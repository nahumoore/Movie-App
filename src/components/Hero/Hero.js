import React from "react"
import HeroNav from "./HeroNav"
import Output from "../Output/Output"
import "./styles.css"

const Hero = () => {
    return(
        <section className="hero">
            <HeroNav />
            <Output />
        </section>
    )
}

export default Hero;