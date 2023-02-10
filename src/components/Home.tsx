import React from "react";
import Carusel from "./Carusel";
import './Home.css'
import ContainerMarketing from "./ContainerMarketing";
const Home = () => {
    return (
        <main role="main">
            <Carusel />
            <ContainerMarketing/>
        </main>
    )
}

export default Home;