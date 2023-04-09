import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/images/pic1.png';
import image2 from '../../assets/images/pic2.png';

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
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default RightSideNav;