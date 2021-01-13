import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { CgMenuCake } from 'react-icons/cg';


export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight:700;
`;

export const NavLink = styled(Link)`
    color:#FFE9CB;
    font: 2rem;
    display:flex;
    align-items: center;
    text-decoration: None;
    curser:pointer;
    font-size:20px;

    @media screen and(max-width: 400px){
        position:absolute;
        top: 10px;
        left: 25 px;
    }
`;

export const NavLogo = styled.img`
    width: 70px;
    height: 70px;
    display:block;
    position:absolute;
    top:3%;
    left:5%;
    box-shadow: 3px 3px 20px #000,
    -2px 1px 30px #000;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #FFE9CB;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    color:transparent;
  }


`;

export const Bars = styled(CgMenuCake)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  
  &:hover{
    font-size: 3rem;
    transition:0.3s ease-in-out;
  }
`;
