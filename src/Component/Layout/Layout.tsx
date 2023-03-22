import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import LoginSidebar from '../Sidebar/LoginSidebar';

const Layout = () => {
    return (
        <div role='main'>
            <div className="flex">
                <div className="bg-white shadow lg:w-30 mx-auto h-screen">
                    <Sidebar />
                </div>
                <div className="container mx-auto mt-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;