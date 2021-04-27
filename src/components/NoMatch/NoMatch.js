import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <>
            <Container>
                <Link to="/"><Button variant="dark btn-sm mt-2"> Go Back</Button></Link>
                <div className="text-center p-5">
                    <img src="https://www.seekahost.com/wp-content/uploads/2017/11/404-page-not-found.jpg" style={{ width: '50%' }} alt="" />
                </div>
            </Container>

        </>
    );
};

export default NoMatch;