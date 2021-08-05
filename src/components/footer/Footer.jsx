import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa'
import { FooterContainer, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrapper } from './FooterElement'


class Footer extends Component {
    state = {}
    render() {
        return (
            <>
                <FooterContainer>
                    <FooterWrapper>
                        <SocialMedia>
                            <SocialMediaWrapper>
                                <SocialLogo to='/'>
                                    scandiweb
                                </SocialLogo>
                                <SocialIcons>
                                    <SocialIconLink href='/' target='_blank' aria-label='facebook' rel='noopener noreferrer'>
                                        <FaIcons.FaFacebook />
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='instagrem' rel='noopener noreferrer'>
                                        <FaIcons.FaInstagram />
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='twitter' rel='noopener noreferrer'>
                                        <FaIcons.FaTwitter />
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='youtube' rel='noopener noreferrer'>
                                        <FaIcons.FaYoutube />
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='whatsapp' rel='noopener noreferrer'>
                                        <FaIcons.FaWhatsapp />
                                    </SocialIconLink>
                                </SocialIcons>
                            </SocialMediaWrapper>
                        </SocialMedia>
                    </FooterWrapper>
                </FooterContainer>
            </>
        );
    }
}

export default Footer;
