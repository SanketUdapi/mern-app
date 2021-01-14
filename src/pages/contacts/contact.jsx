import React,{useState} from 'react';
import Navbar from '../../components/navbar/navbarcomponent';
import Sidebar from '../../components/sidebar/sidebarcomponent';
import {Contactwrapper,ContactTitle,ContactsubTitle,Content,Social,SocialFace,Faceicon,SocialTele,Teleicon,SocialMail,Address,Mailicon,Mail1,Mail2,Adicon} from './contactelements'
import Footer from '../../components/footer/footercomponent';


const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return ( 
        <div className='bak'>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Content>
              <Contactwrapper>
                <ContactTitle>Hey, Wanna Chat with us??</ContactTitle>
                <ContactsubTitle>You can connect with us in following ways.....</ContactsubTitle>
              </Contactwrapper>
              <Social>
                <SocialFace to="/face" target="_blank"> 
                  <Faceicon/>  
                  <p>Click on the icon for Facebook page</p>
                </SocialFace>
                <SocialTele>
                  <Teleicon/>
                  <p>02164-222372</p>
                </SocialTele>
                <SocialMail>
                  <Mailicon/>
                    <Mail1>ksu1970@gmail.com</Mail1>
                    <Mail2>vivek.udapi@gmail.com</Mail2>
                </SocialMail>
                <SocialMail>
                  <Adicon/>
                    <Address to="/address"  target="_blank" >34, Guruwar peth, KARAD, 415110</Address>
                </SocialMail>
                
                 
              </Social>
              </Content>
              
            <Footer/>
        </div>
     );
}
 
export default Contact;