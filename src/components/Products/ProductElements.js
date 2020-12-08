import styled from 'styled-components'

export const ProductContainer = styled.div`
    background: #150f0f;
    color:#fff;
    padding: 5rem 2rem;

`;

export const ProductWrapper = styled.div`
    min-height: 100vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin:0 auto;

`;

export const ProductCard = styled.div`
    width:300px;
    text-align:center;
    margin:0 2rem;
`;

export const ProductImg = styled.img`
    width:300px;
    height:300px;
    box-shadow: 8px 4px #fdc500;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    transition: 0.2s ease;
    margin-bottom: 2rem;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease;
    }

`;

export const ProductName = styled.h1`
    font-size: 2rem;
    font-weight:500;
    margin: .5rem 0;

`;

export const ProductDesc = styled.p`
    font-size: 1rem;
    text-align:center;
    line-height:2;
    
`;

export const ProductPrice = styled.h1`
    font-size: 2.5rem;
    font-weight:400;
    margin: 1rem;
    
`;

export const ProductBtn = styled.button`
    font-size: 1rem;
    padding: 10px 24px;
    outline: none;
    border: none;
    cursor:pointer;
    background: #fb1223;
    color:#000;
    margin-bottom: 1rem;

    &:hover{
    background: #fdc500;
    color:#000;
    }
    
    
`;