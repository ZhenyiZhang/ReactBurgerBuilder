import React from 'react';
import Classes from "./NavItems.css";

const NavItem = (props) => {
    return (
    <li className={Classes.NavItem}>
        <a href={props.link}
            className={props.active ? Classes.NavItem.active : null}
        >{props.children}</a>
    </li> );
};

export default NavItem;