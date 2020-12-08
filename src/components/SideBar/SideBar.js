import React from 'react'
import {SideContainer, SideInfo, SideLinks, SLink, SideBtn, Bar} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideContainer isOpen={isOpen}>
            <Bar to='/' onClick={toggle}></Bar>
            <SideInfo>
                <SideLinks>
                    <SLink to='/'>Home</SLink>
                    <SLink to='/'>Products</SLink>
                    <SLink to='/'>Services</SLink>
                </SideLinks>
                <SideBtn>Order Now</SideBtn>
            </SideInfo>
        </SideContainer>
    )
}

export default SideBar
