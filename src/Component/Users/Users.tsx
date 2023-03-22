import React from 'react';
import searchIcon from "../../assets/search Icon.svg";
import bellIcon from "../../assets/bell icon.svg";
import userIcon from "../../assets/Mask icon.svg";
import UsersList from './UsersList';

const Users = () => {

    const handleSearch = () => {
        console.log('Search item');
    }

    return (
        <div className='lg:mx-4 min-[320px]:mx-2 my-4 h-auto'>
            <div className='flex justify-between items-center px-4 sm:gap-8'>
                <div className='relative md:w-80 min-[320px]:w-32'>
                    <button className='absolute z-20 right-4 top-1/2 -translate-y-1/2' onClick={handleSearch}>
                        <img src={searchIcon} alt="eye open Icon" className='inline-block w-4' />
                    </button>
                    <input
                        type='search'
                        id="search"
                        placeholder='Search'
                        className='border-2 bg-link-bg rounded-xl py-1 px-4 inline-block w-full text-base::placeholder focus:outline-none'

                    />
                </div>
                <div className='flex justify-center items-center md:gap-8 gap-2'>
                    <img src={bellIcon} alt="Bell Icon" className='w-6' />
                    <img src={userIcon} alt="User Icon" className='w-12' />

                </div>
            </div>
            <div className='mt-12'>
                <UsersList />
            </div>
        </div>
    );
};

export default Users;