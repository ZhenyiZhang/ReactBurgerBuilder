import React from 'react';
import Classes from './NavItems.css';
import NavItem from "./NavItem";

const NavItems = (props) => {
    return(
        <ul className={props.sideDraw ? Classes.NavItemsSideDraw : Classes.NavItems}>
            <NavItem link="/" active>Menu</NavItem>
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>);
};

export default NavItems;