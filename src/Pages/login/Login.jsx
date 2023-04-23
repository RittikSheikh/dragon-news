import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider ';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';



const Login = () => {

    const {logInUser, errorType, setErrorType, user, setLoading} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log('log in user', user)
            setErrorType('')
            if (user?.emailVerified) {
                navigate(from, {replace: true})
            }
            else{
                toast.error('please verify your email',{duration: 2500});
            }
        })
        .catch(error => {
            console.error(error)
            setErrorType(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <div>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <div><p className='text-danger'>{errorType}</p></div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Login;