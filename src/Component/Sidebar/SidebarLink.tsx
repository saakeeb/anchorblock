import dashboardIcon from '../../assets/dashboard icon.svg';
import usersIcon from '../../assets/user icon.svg';
import invoiceIcon from '../../assets/invoice icon.svg';

const sidebarLink = [
    {
        exact: true,
        activeClassName: "active",
        to: "/",
        aria_label: "Link to home page",
        // end: true,
        name: "Dashboard",
        icon: dashboardIcon,
    },
    {
        exact: true,
        activeClassName: "active",
        to: "/users",
        aria_label: "Link to users page",
        // end: false,
        name: "Users",
        icon: usersIcon,
    },
    {
        exact: true,
        activeClassName: "active",
        to: "/sales",
        aria_label: "Link to sales page",
        // end: false,
        name: "Sales",
        icon: invoiceIcon,
    }
];

export default sidebarLink;