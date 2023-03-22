import React from 'react';
import NavigationLogo from './NavigationLogo';
import DropdownButton from '../DropdownButoon/DropdownButton';

const LoginSidebar = () => {
    return (
        <div className='flex justify-between items-center lg:mx-12 min-[320px]:mx-6 my-4 h-auto'>
            <NavigationLogo />
            <DropdownButton />
        </div>
    );
};

export default LoginSidebar;