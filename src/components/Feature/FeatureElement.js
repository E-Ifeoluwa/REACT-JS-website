import styled from 'styled-components'
import ImgBg2 from '../../images/img3.jpg'

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${ImgBg2});
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 70vh;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    padding:0 2rem;
`;

export const FeatureContent = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;

    p{
        font-size:1.5rem;
    }
`;

export const FeatureH1 = styled.h1`
    font-size:3rem;
    font-weight:bold;
    color:#fff;
`;


export const FeatureBtn = styled.button`
    padding:1rem 2.5rem;
    margin: 1rem auto;
    background: #fdc500;
    color:#000;
    cursor:pointer;
    border:none;
    outline:none;
    transition: 0.2s ease-out;


    &:hover{
        background:#fb1223;
        color:#fff;
        transition: 0.2s ease-out;
    }
;
`
