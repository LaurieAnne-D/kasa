import React from 'react';
import './home.css';
import Banner from '../../components/Banner/Banner';
import homeImg from '../../assets/images/home.png';
import Cards from '../../components/Cards/Cards';

function Home() {
    return (
        <main>
            <Banner
                img={homeImg}
            />
            <Cards />
        </main>
    )
}

export default Home;