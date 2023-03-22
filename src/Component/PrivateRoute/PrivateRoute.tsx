import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [auth, setAuth] = useState<boolean>(true); //if true then user can go inside without authentication
    let isAuthenticated = useSelector((state: any) => state?.username?.isAuthenticated); //getting authentication value from the redux store
    useEffect(() => {
        setAuth(isAuthenticated);
        console.log('auth=====1', auth);
        console.log('auth=====2', isAuthenticated);
    }, [auth, isAuthenticated]);
    return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;