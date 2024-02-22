import React from "react";
import Banner from "../../components/Banner/Banner";
import aboutImg from "../../assets/images/about.png";
import Collapse from "../../components/Collapse/Collapse";
import "./about.css";

function About () {
    return (
        <main>
            <Banner
                img={aboutImg}
            />
            <Collapse />
        </main>
    )
}

export default About;
