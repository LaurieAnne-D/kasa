import React from 'react';
import './home.css';
import Banner from '../../components/Banner/Banner';
import homeImg from '../../assets/images/home.png';

function Home() {
    return (
        <main>
            <p>Home</p>
            <Banner
                img={homeImg}
            />
        </main>
    )
}

export default Home;