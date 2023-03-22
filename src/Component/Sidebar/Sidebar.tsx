import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLinkData from './SidebarLink';
import NavigationLogo from './NavigationLogo';
import { SidebarLinkProps } from './SidebarLinkProps';

const Sidebar: React.FC = () => {
    return (
        <div className='flex flex-col lg:mx-4 min-[320px]:mx-2 my-4 h-auto'>
            <NavigationLogo />
            <p className='my-2 ml-3 text-link-text text-xs'>Pages</p>
            <nav className='flex flex-col'>
                {
                    SidebarLinkData.map((data: SidebarLinkProps) => (
                        <NavLink
                            key={data.name}
                            to={data.to}
                            aria-label={data.aria_label}
                            end
                            className="[&.active]:bg-link-bg [&.active]:rounded-xl [&.active]:shadow-xl h-12 flex items-center"
                        >
                            <img src={data.icon} alt={data.name} className='lg:mx-3 min-[320px]:mx-2 mr-0' />
                            <p className='text-link-text text-sm'>{data.name}</p>
                        </NavLink>
                    ))
                }
            </nav>
        </div>
    );
};

export default Sidebar;