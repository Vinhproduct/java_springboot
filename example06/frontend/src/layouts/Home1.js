import React from 'react'

import Items from '../pages/home1/Items';
import Slider from '../pages/home1/Slider'
import Banner from '../pages/home1/Banner'
import Deal from '../pages/home1/Deal'









function Home1(props) {
    return (
        <div class="container">
            <Slider />
            <Items />
      
            <Banner/>
            <Deal/>
     

        </div>

    );
}
export default Home1