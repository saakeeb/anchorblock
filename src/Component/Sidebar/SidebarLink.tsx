const sidebarLink = [
    {
        exact: true,
        activeClassName: "active",
        to: "/",
        aria_label: "Link to home page dashboard",
        // end: true,
        name: "Dashboard"
    },
    {
        exact: true,
        activeClassName: "active",
        to: "/users",
        aria_label: "Link to users page",
        // end: false,
        name: "Users"
    },
    {
        exact: true,
        activeClassName: "active",
        to: "/sales",
        aria_label: "Link to sales page",
        // end: false,
        name: "Sales"
    }
];

export default sidebarLink;