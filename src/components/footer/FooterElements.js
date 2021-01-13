import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  height:10vh;
  align-items:center;
  justify-content: center;
  display: flex;
  padding: 16px 24px;
  padding-top:30px;
`;


export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-self: center;
  margin-bottom: 16px;
  font-weight: bold;
  margin-top:10px;
`;

