import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
    return (
        <div className="flex" role='main'>
            <div className="bg-white shadow w-30 mx-auto">
                <Sidebar />
            </div>
            <div className="container mx-auto mt-12">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;