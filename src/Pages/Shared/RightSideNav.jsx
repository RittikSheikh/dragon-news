import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"> <FaFacebook /> Login With Facebook</Button>
                <Button variant="outline-dark"> <FaGithub /> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h3  className='mb-4'>Find us on!</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram /> instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaGithub /> github</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> twitch</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;