import React,{useState} from 'react';
import Navbar from '../../components/navbar/navbarcomponent';
import Sidebar from '../../components/sidebar/sidebarcomponent';
import Products from '../../components/products/productscomponent'
import { allsweets } from '../../data';
import Footer from '../../components/footer/footercomponent';

const Sweetspage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return ( 

        <div className='bak'>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Products heading='Hey, here is the list of all our sweets...' data={allsweets}/>
            <Footer/>
        </div>
     );
}
 
export default Sweetspage;