import React from "react";
import Carusel from "./Carusel";
import './Home.css'
import ContainerMarketing from "./ContainerMarketing";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carusel.css'
const Home = () => {
    return (
        <main role="main">
            <Carusel />
            <ContainerMarketing/>
        </main>
    )
}

export default Home;