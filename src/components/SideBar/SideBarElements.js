import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'


export const SideContainer = styled.div`
    position:fixed;
    top:0;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};
    // right:0;
    z-index: 999;
    width: 350px;
    height: 100vh;
    display:grid;
    justify-content:center;
    background: #fdc500;
    color:#000;
    transition:0.5s ease-in-out;

    @media screen and (max-width: 400px){
        width: 100vw;
    }

`;

export const SideInfo = styled.div`
    width: 100%;
    padding: 5rem 2rem;
`;

export const SideLinks = styled.div`
    display:grid;
    grid-template-column: 1fr;
    grid-template-row: repeat(3, 80px);
    text-align:center;
    grid-gap: 3rem;
    margin-bottom: 3rem;
    width: 60%;
`;

export const SLink = styled(Link)`
    font-size:1.4rem;
    color:#000;
    display:flex;
    // flex-direction:column;
    justify-content: center;
    align-items:center;
    text-align:center;
    text-decoration:none;
    cursor:pointer;

    &:hover{
        color:#fb1223;
    }
`;

export const SideBtn = styled.button`
    padding: 10px 24px;
    background: #fb1223;
    font-size: 1.2rem;
    color:#fff;
    border:none;
    outline:none;
    width:80%;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        background: #fff;
        color:#150f0f;
        transition: 0.2s ease-in-out;
    }
`;

export const Bar = styled(FaTimes)`
    color:#000;
    font-size:2rem;
    position:absolute;
    top:0;
    right:5px;
    padding:1.1rem;
    border:none
    background:transparent;
`;

