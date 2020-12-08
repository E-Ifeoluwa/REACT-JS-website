import React from 'react'
import {FeatureContainer, FeatureContent, FeatureH1, FeatureBtn} from './FeatureElement'


const Feature = () => {
    return (
        <FeatureContainer>
            <FeatureContent>
                <FeatureH1>Burger of the day</FeatureH1>
                <p>Trufle alfredo sauce with 24carst gold dust</p>
                <FeatureBtn>Order Now</FeatureBtn>
            </FeatureContent>
        </FeatureContainer>
    )
}

export default Feature
