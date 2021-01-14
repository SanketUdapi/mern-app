import styled from 'styled-components';
import {SiFacebook,SiGmail} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import { Link } from 'react-router-dom';

export const Content = styled.div`
    min-height:100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
`;

export const Contactwrapper = styled.div`   
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    height: 50vh;
    max-height: 100%;
    padding: 0 2rem;  
    color:#FFE9CB;
    line-height:1;
    font-weight:bold;
`;

export const ContactTitle = styled.div`
    font-size:3.5rem;
`;

export const ContactsubTitle = styled.div`
    font-size:1.5rem;
    margin-bottom:20px;
`;

export const Social = styled.div`

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
height: 50vh;
max-height: 100%;
padding: 0 2rem;
color:#FFE9CB;
line-height:1;
font-weight:bold;
    
`;

export const SocialFace = styled(Link)`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom:20px;
    color:#FFE9CB;
    cursor: pointer;
    text-decoration: none;
`;
export const Faceicon = styled(SiFacebook)`
    font-size:2.5rem;
    align-self:center;
    margin-bottom:20px;
    &:hover {
        font-size:3rem;
    }
`;
export const SocialTele = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin-bottom:20px;
    font-size:1.5rem;
`;
export const Teleicon = styled(AiFillPhone)`
    font-size:1.5rem;
    align-self:center;
    margin-bottom:20px;
`;
export const SocialMail = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom:20px;
    align-items:center;
`;
export const Mailicon = styled(SiGmail)`
    
    font-size:1.5rem;
    align-self:center;
    margin-bottom:20px;
`;
export const Adicon = styled(MdLocationOn)`
    
    font-size:1.5rem;
    align-self:center;
    margin-bottom:20px;
`;


export const Mail1 = styled.div`
    font-size:1.5rem;
    

`;

export const Mail2 = styled.div`
    font-size:1.5rem;
`;

export const Address = styled(Link)`
    font-size:1.5rem;
    align-items:center;
    margin-bottom:20px;
    color:#FFE9CB;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        font-size:2rem;
    }
`;
