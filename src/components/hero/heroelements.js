import styled from 'styled-components';
import imbg from '/projects/vijaybhava/src/assets/stock1.webp'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url(${imbg});
    height: 100vh;
    background-position: Center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh-80px);
    max-height: 100%;
    padding: 0rem calc((100vw-1300px)/2);

`;

export const HeroItem = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    height: 100vh;
    max-height: 100%;
    padding 0 2rem;
    width:650px;
    color:#FFE9CB;
    
    line-height:1;
    font-weight:bold;

    @media screen and (max-width :650px){
        width:100px;
    }
`;

export const HeroH1 = styled.h1`
    font-size:clamp(2.5rem,10vw,5rem);
    margin-bottom:1rem;
    box-shadow:3px 5px #616B3B;
    letter-spacing:3px;
    text-transform: uppercase;

`;

export const HeroP = styled.p`
    font-size:clamp(2rem,2.5vw,3rem);
    margin-bottom:2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #9E7439;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius:7px;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;


