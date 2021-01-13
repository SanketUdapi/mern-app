import React from 'react'
import Hero from '../../components/hero/herocomponent'
import Products from '../../components/products/productscomponent'
import Footer from '../../components/footer/footercomponent';
import { snacks, Sweets } from '../../data';
import Bestseller from '../../components/Bestseller/bestsellercomponent';

const Mainpage = () => {
    return ( 
        <>          
            <Hero/>
            <Products heading='Choose your Sweets' data={Sweets} />
            <Bestseller/>
            <Products heading='Choose your Snacks' data={snacks} />
            <Footer/>
        </>
     );
}
 
export default Mainpage;