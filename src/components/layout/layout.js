import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './layout.css';

const Layout = (props) => {
    return (
        <Aux>
            <p>Tool Bar, SideDrawer, Backdrop</p>
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;