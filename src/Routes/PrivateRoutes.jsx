import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider ';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const style = {
        'margin-left': '45%' 
    }
    if (loading) {
        return <Spinner style={style} animation="border" role="status"></Spinner>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;