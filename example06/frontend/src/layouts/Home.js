import React from 'react'
import Slider from '../pages/home/Slider'
import Deal from '../pages/home/Deal';
import Apparel from '../pages/home/Apparel';
import Electronics from '../pages/home/Electronics';
import Request from '../pages/home/Request';
import Items from '../pages/home/Items';
import Services from '../pages/home/Services';
import Region from '../pages/home/Region';
import Subscribe from '../pages/home/Subscribe';




function Home(props) {
    return (
        <div class="container">
            <Slider />
            <Deal />
            <Apparel />
            <Electronics />
            <Request />
            <Items />
            <Services />
            <Region />
            <Subscribe />
            

        </div>

    );
}
export default Home