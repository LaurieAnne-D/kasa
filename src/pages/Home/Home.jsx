import React from 'react';
import './home.css';
import Banner from '../../components/Banner/Banner';
import homeImg from '../../assets/images/home.png';
import Card from '../../components/Card/Card';

function Home() {
    return (
        <main>
            <Banner
                img={homeImg}
            />
            <Card />
        </main>
    )
}

export default Home;