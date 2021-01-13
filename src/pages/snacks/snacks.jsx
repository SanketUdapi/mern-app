import React,{useState} from 'react';
import Navbar from '../../components/navbar/navbarcomponent';
import Sidebar from '../../components/sidebar/sidebarcomponent';
import Products from '../../components/products/productscomponent'
import { allsnacks } from '../../data';
import Footer from '../../components/footer/footercomponent';

const Snackspage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return ( 

        <div className='bak'>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Products heading='Did someone say snacks?????' data={allsnacks}/>
            <Footer/>
        </div>
     );
}
 
export default Snackspage;