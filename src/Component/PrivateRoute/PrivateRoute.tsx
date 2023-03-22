import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // const auth = useAuth();
    const auth = false;
    return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;