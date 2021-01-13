import React from 'react';
import {SidebarContainer,Icon,Closeicon,Sidebarmenu,Sidebarlink/*,Sidebarroute,Sidebtnwrap*/} from './sidebarelements'

const Sidebar = ({ isOpen, toggle }) => {
    return ( 
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Closeicon/>
            </Icon>
            <Sidebarmenu>
                <Sidebarlink to="/">Home</Sidebarlink>
                <Sidebarlink to="/sweet">Sweets</Sidebarlink>
                <Sidebarlink to="/snack">Snacks</Sidebarlink>
                <Sidebarlink to="/allitems">All items</Sidebarlink>
                <Sidebarlink to="/contact">Contact Us</Sidebarlink>
            </Sidebarmenu>
        </SidebarContainer>
     );
}
 
export default Sidebar;