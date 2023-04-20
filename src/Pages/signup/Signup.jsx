import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider ';
import { Link } from 'react-router-dom';



const Signup = () => {

    const { createUser, updateUserProfile, errorType, setErrorType } = useContext(AuthContext);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setErrorType('')
                console.log('created user email and password', user)
                updateUserProfile(name, photoUrl)
                .then(() => {
                    console.log('profile updated')
                })
                .catch(error => console.error(error))
            })
            .catch(error =>{
                console.error(error)
                setErrorType(error.message)
            })
    }

    return (
        <div>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotUrl">
                    <Form.Label>Your PhotoURL</Form.Label>
                    <Form.Control name='photoUrl' type="text" placeholder="Your Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=>setAcceptTerms(!acceptTerms)} type="checkbox" label={<>Accept terms and <Link to='/terms'>condition</Link></>} />
                </Form.Group>
                <div>
                    <p className='text-danger'>{errorType}</p>
                </div>
                <Button variant="primary" type="submit" disabled={!acceptTerms}>
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Signup;