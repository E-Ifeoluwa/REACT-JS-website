import React from 'react'
import {ProductContainer, ProductWrapper, ProductCard, ProductImg, ProductName, ProductDesc, ProductPrice, ProductBtn} from './ProductElements'

const Products = ({data}) => {
    return (
        <ProductContainer>
            <ProductWrapper>
                {data.map((product, index)=> {
                    return (
                        <ProductCard key={index}>
                        <ProductImg alt={product.alt} src={product.img} />
                        <ProductName>{product.name}</ProductName>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>

                        <ProductBtn>{product.btn}</ProductBtn>
                        </ProductCard>
                    )
                })}
            
            </ProductWrapper>
           
        </ProductContainer>
    )
}

export default Products
