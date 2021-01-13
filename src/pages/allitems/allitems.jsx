import React,{useState} from 'react';
import Navbar from '../../components/navbar/navbarcomponent';
import Sidebar from '../../components/sidebar/sidebarcomponent';
import Products from '../../components/products/productscomponent'
import { all } from '../../data';
import Footer from '../../components/footer/footercomponent';
import '../../App.css'


const Allitems = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return ( 

        <div className='bak'>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Products heading='These are all the items we offer...' data={all}/>
            <Footer/>
        </div>
     );
}
 
export default Allitems;