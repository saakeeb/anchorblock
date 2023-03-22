import React from 'react';
import { LoginIconButtonProps } from './LoginIconButtonProps';

const LoginIconButton = ({ text, img }: LoginIconButtonProps) => {
    return (
        <div className='flex justify-center items-center'>
            <img src={img} alt="text" className='mr-2 w-4' />
            <p className=''>{ text }</p>
        </div>
    );
};

export default LoginIconButton;