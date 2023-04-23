import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from './LeftSideNav';
import RightSideNav from './RightSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider ';
import { HiUser } from "react-icons/hi";
import { Button, Image } from 'react-bootstrap';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(result => {
        console.log('logged out success')
      })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Categories</Nav.Link>
              <Nav.Link href="#pricing">News</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <p>{user?.displayName}</p>
              <Link to='/profile'>
                {
                  user?.photoURL ? <Image style={{ width: '40px', height: '40px' }} roundedCircle src={user.photoURL} /> : <HiUser />
                }
              </Link>
              <>{user?.uid ? <Button onClick={handleLogout} variant='outline-dark'>logout</Button> : <><p variant='outline-dark' className='me-2'><Link to='/login'>login</Link></p> <p variant='outline-dark'><Link to='/signup'>signup</Link></p> </>}</>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNav />
              <RightSideNav />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;