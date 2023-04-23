import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider ';



const Profile = () => {

    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoUrlRef = useRef(user?.photoURL);

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        console.log(name,',,,', photoUrlRef.current.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

   

    return (
        <Form onSubmit={handleProfileSubmit}>
            <Form.Group onChange={handleNameChange} className="mb-3" controlId="formBasicName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" defaultValue={name} placeholder="your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" defaultValue={user?.email} readOnly placeholder="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control type="text" ref={photoUrlRef} defaultValue={user?.photoURL} placeholder="photoURL" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;