import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuth = true;
    const [auth, setAuth] = useState<boolean>(true); //if true then user can go inside without authentication
    let isAuthenticated = useSelector((state: any) => state?.username?.isAuthenticated); //getting authentication value from the redux store
    useEffect(() => {
        setAuth(isAuthenticated);
    }, [auth, isAuthenticated]);
    return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;