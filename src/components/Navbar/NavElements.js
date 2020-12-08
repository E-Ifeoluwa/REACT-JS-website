import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiHamburger} from 'react-icons/gi'


export const NavContainer = styled.div`
    height: 80px;
    display: flex;
    background: transparent;
    justify-content:center;

`;

export const NavLogo = styled(Link)`
    color: #fff;
    display: flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    font-weight:bold;
    font-size:2rem;

    @media screen and (max-width:400px){
        position:absolute;
        top:16px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    position: absolute;
    cursor:pointer;
    top:0;
    right: 2px;
    color:#fff;
    margin-top:-.5rem;

    p{
        font-size:1.5rem;
        transform:translate(-135%, 100%);
    }

    &:hover{
        color: #fdc500;
    }
`

export const Icon = styled(GiHamburger)`
    color: #white;
    transform:translate(-50%, -50%);
    font-size: 2rem;
    margin-top:.7rem;
`