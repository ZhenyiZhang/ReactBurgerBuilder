import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './layout.css';
import ToolBar from "../Navigation/Toolbar/ToolBar";

const Layout = (props) => {
    return (
        <Aux>
            <ToolBar/>
            <p>SideDrawer</p>
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;