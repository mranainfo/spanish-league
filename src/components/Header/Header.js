import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <Container fluid={true} className="topFixedBanner p-0">
                <div className="topBannerOverlay">
                    <h1 className="title">Spanish League</h1>
                </div>
            </Container>
        </>
    );
};

export default Header;