import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {

    const isAuthenticated = useSelector((state: any) => state?.username?.isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;