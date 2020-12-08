import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer = styled.div`
    background: #0d0909;
    color:#fff;
    padding:1rem 4rem;
    // overflow-x: hidden;
`;


export const FooterWrap = styled.div`
    display: flex;
    max-width:1100px;
    justify-content: space-between;

`;

export const SocialLogo = styled.div`
    display: flex;
    justify-self: start;
    width:1300px;

`;

export const Slogo = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color:#fff;

`;

export const SocialIcons = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;
export const IconLink = styled(Link)`
    font-size: 2rem;
    color: #fff;
    margin: 0 .3rem;
    
    &:hover{
        color:#fdc500

    }


    @media screen and (max-width:650px){
        font-size: 1.3rem;
    }
`;




