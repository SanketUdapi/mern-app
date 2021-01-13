import React from 'react';
import {Nav, NavLink,NavLogo,NavIcon,Bars} from './navbarelements'
import logo from '/projects/vijaybhava/src/assets/logo.webp'


const Navbar = ({toggle}) => {
    return ( 
        <>
        <Nav>
            <NavLogo src={logo}/>   
            <NavLink to='/'>Vijay Bhavan </NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
            <Bars />
            </NavIcon>
        </Nav>
        </>
     );
}
 
export default Navbar;