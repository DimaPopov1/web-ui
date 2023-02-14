import React from "react";
import Carousel from "./Carousel/Carousel";
import ContainerMarketing from "./ContainerMarketing/ContainerMarketing";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
    return (
        <main role="main">
            <Carousel />
            <ContainerMarketing/>
        </main>
    )
}

export default Home;