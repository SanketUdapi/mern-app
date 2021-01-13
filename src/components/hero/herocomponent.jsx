import React,{useState} from 'react';
import Navbar from '../navbar/navbarcomponent';
import Sidebar from '../sidebar/sidebarcomponent';
import {HeroContainer,HeroContent,HeroItem,HeroH1,HeroP,HeroBtn} from './heroelements';
import {Link} from 'react-router-dom';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    
    return ( 
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItem>
                    <HeroH1>Vijay Bhavan</HeroH1>
                    <HeroP>Goto Destination for quality food...</HeroP>
                    <Link to='/contact'>
                    <HeroBtn >Contact Us</HeroBtn>
                    </Link>
                </HeroItem> 
            </HeroContent>
        </HeroContainer>
     );
}
 
export default Hero;