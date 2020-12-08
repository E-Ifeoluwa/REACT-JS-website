import React from 'react'
import {NavContainer, NavLogo, NavIcon, Icon} from './NavElements'


const Navbar = ({toggle}) => {
    return (
        <NavContainer>
            <NavLogo to='/'>Burger</NavLogo>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Icon></Icon>
            </NavIcon>
        </NavContainer>
    )
}

export default Navbar
