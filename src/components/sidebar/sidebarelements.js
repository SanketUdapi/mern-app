import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:350px;
    height:100%;
    background:#9E7439;
    display:grid;
    align-items:center;
    top:0;
    transition:0.3s ease-in-out;
    right:${({ isOpen }) => ( isOpen ? '0' : '-1000px')};


`; 

export const Closeicon = styled(FaTimes)`
    color:#FFE9CB;
    &:hover{
        font-size: 3rem;
        transition:0.3s ease-in-out;
      }

`; 

export const Icon = styled.div`
    position:absolute;
    top: 1.2rem;
    right: 1.5rem;
    background:transparent;
    border:transparent;
    font-size:2rem;
    curser:pointer;
    outline:none
`; 

export const Sidebarmenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
    }
`; 

export const Sidebarlink = styled(Link)`
    display:flex;
    align-ietms:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style-none;
    transition:0.2s ease-in-out;
    color:#FFE9CB;
    curser:pointer;

    &:hover{
        color: #ffc500;
        font-size:2rem;
        transition:0.3s ease-in-out;
        text-shadow: 3px 3px 20px #E71D1D,
    -2px 1px 30px #E71D1D;

    }
`; 