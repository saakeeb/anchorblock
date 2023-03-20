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
}
 
const Sidebar: React.FC = () => {
    return (
        <div className='flex w-100 '>
            <Link className='w-10 h-3' to='/' aria-label='Link to home page'>
                <img className='' src={StackLogo} alt="Stack logo" />
            </Link>
            <nav className='h-4 mx-2'>
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
                        className=""
                    >
                        {data.name}
                    </NavLink>
                    ))
                }
            </nav>
        </div>
    );
};

export default Sidebar;