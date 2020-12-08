import React from 'react'
import {FooterContainer, FooterWrap, SocialLogo, SocialIcons, Slogo, IconLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialLogo>
                    <Slogo to='/'>Burger</Slogo>
                </SocialLogo>

                <SocialIcons>
                    <IconLink href='/' target='_blank'>
                        <FaFacebook />
                    </IconLink>

                    <IconLink href='/' target='_blank'>
                        <FaInstagram />
                    </IconLink>

                    <IconLink href='/' target='_blank'>
                        <FaTwitter />
                    </IconLink>

                    <IconLink href='/' target='_blank'>
                        <FaYoutube />
                    </IconLink>

                    <IconLink href='/' target='_blank'>
                        <FaLinkedin />
                    </IconLink>
                </SocialIcons>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
