import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import StackLogo from '../../assets/Stack Logo.svg';
import SidebarLinkData from './SidebarLink';

interface SidebarLink {
    exact: boolean;
    activeClassName: string;
    to: string;
    aria_label: string;
    name: string;
    icon?: string | undefined;
}

const Sidebar: React.FC = () => {
    return (
        <div className='flex flex-col w-48 mx-4 my-4 h-screen'>
            <Link className='w-100' to='/' aria-label='Link to home page'>
                <img className='' src={StackLogo} alt="Stack logo" />
            </Link>
            <nav className='flex flex-col'>
                {/* <NavLink
                    exact='true'
                    activeclassname="active"
                    to="/"
                    aria-label='Link to home page dashboard'
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname="active"
                    to="/users"
                    aria-label='Link to users page'
                >
                    Users
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname="active"
                    to="/sales"
                    aria-label='Link to sales page'
                >
                    Sales
                </NavLink> */}
                {
                    SidebarLinkData.map((data: SidebarLink) => (
                        <NavLink
                            key={data.name}
                            // exact={data.exact}
                            // activeClassName={data.activeClassName}
                            to={data.to}
                            aria-label={data.aria_label}
                            end
                            className="[&.active]:bg-link-bg [&.active]:rounded-xl [&.active]:shadow-xl h-12 flex items-center"
                        >
                            <img src={data.icon} alt={data.name} className='mx-3' />
                            <p className='text-link-text'>{data.name}</p>
                        </NavLink>
                    ))
                }
            </nav>
        </div>
    );
};

export default Sidebar;