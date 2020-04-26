import React from 'react';
import Classes from './ToolBar.css';
import Logo from "../../Logos/Logo";


const ToolBar = () => {
    return(
        <header className={Classes.ToolBar}>
            <Logo/>
            <div>MENU</div>
            <nav>
            </nav>
        </header>
    );
};

export default ToolBar;