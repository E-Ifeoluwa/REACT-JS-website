import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import {Herobg, HeroContent, HeroInfo, HeroH1, HeroH2, HeroBtn} from './HeroElements'


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }


    return (
        <Herobg>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroInfo>
                    <HeroH1>
                        Greatest Burger
                    </HeroH1>
                    <HeroH2>
                        Now at your Doorstep
                    </HeroH2>
                    <HeroBtn to='/'>Place Order</HeroBtn>
                </HeroInfo>
            </HeroContent>
        </Herobg>
    )
}

export default Hero
