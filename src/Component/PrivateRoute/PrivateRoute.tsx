import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // const auth = useAuth();
    const auth = true;
    return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;