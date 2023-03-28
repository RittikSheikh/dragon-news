import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container className='mt-5'>
                <Row>
                    <Col lg={2} className='d-none d-lg-block'>
                        <LeftSideNav/>
                    </Col>
                    <Col lg={7}>
                        <Outlet />
                    </Col>
                    <Col lg={3} className='d-none d-lg-block'>
                        <RightSideNav/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default Main;