import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h4>website use korar somoy cup cap thakbi kono kotha bolbi na.</h4>
            <Link to='/signup'><Button>go back</Button></Link>
        </div>
    );
};

export default Terms;