import './Footer.css';
import { Container } from '../../Components';

import React from 'react'

const Footer = () => {

    const links = ['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal', 'Site Map'];
  
    return (
        <footer>
            <Container>
                <div className='footer-comunications'>
                    <p>
                        More ways to shop: {' '}
                        <span>Find an Apple Store</span> {' '}
                        or {' '}
                        <span>other retailer</span> {' '}
                        near you.
                    </p>
                    <p>
                        Or call +963-93829299
                    </p>
                </div>
                <hr />
                <div className='footer-other'>
                    <p>Copright @ 2024 Apple Inc. All rights reserved</p>
                    <div className='footer-links'>
                        {
                            links.map((link, i) => 
                            <p className='footer-link'>
                                {link}
                                {i !== links.length -1 && <span className='footer-sperate'>|</span>}
                            </p>)
                        }
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;