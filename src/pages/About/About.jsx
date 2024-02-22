import React from "react";
import Banner from "../../components/Banner/Banner";
import aboutImg from "../../assets/images/about.png";
import Collapse from "../../components/Collapse/Collapse";
import informationsData from '../../data/informations.json';
import "./about.css";

const informations = informationsData;
function CollapseContainer() {
    return (
        <ul>
            {informations.map(information => (
                <Collapse
                    key={information.title}
                    title={information.title}
                    content={information.content}
                />
            ))}
        </ul>
    );
}

function About () {
    return (
        <main>
            <Banner
                img={aboutImg}
            />
            <CollapseContainer />
        </main>
    )
}

export default About;
