import styled from 'styled-components'
import BG from '../../images/img2.jpg'

 export const Herobg = styled.div`
    background-image: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${BG});
    height:100vh;
    background-position: center;
    background-size:cover;
    overflow:hidden;
`;

export const HeroContent = styled.div`
    width:100vw;
    height:60vh;
    color:#fff;
    
`;

export const HeroInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify:content: center;
    width:650px;
    color:#fff;
    align-items:flex-start;
    max-height:100%;
    padding: 7rem 2rem;
    text-decoration:none;

    @media screen and (max-width: 400px) {
        width:100%;
      }
`;

export const HeroH1 = styled.h1`
    font-size: clamp(3rem, 10vw, 3rem);
    padding: .5rem;
    box-shadow: 3px 5px #fdc500;
    font-weight: bold;
    margin-bottom: .5rem;
    text-transform:uppercase;


    @media screen and (max-width: 400px) {
        font-size: clamp(2rem, 5vw, 2.5rem);

      }
    
`;


export const HeroH2 = styled.h2`
    font-size: clamp(1.5rem, 10vw, 2rem);
    font-weight: bold;
    text-transform:uppercase;
    


    @media screen and (max-width: 400px) {
        font-size: clamp(1rem, 5vw, 1.5rem);

      }
    
`;


export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding:10px 24px;
    width:60%;
    outline:none;
    border:none;
    cursor:pointer;
    background: #fb1223;
    color:#fff;
    text-decoration:none;
    transition: 0.3s ease-in-out;


    &:hover{
        transition: 0.3s ease-in-out;
        background: #fdc500;
        color:#000;
    }
    
`;