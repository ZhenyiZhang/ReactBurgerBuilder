import React from 'react';
import Classes from './ToolBar.css';
import Logo from "../../Logos/Logo";
import NavItems from "../NavItems/NavItems";
import MenuButton from '../../Logos/images/menu.svg';

const ToolBar = (props) => {
    return(
        <header className={Classes.ToolBar}>
            <button
                onClick={props.sideDrawerButtonClick}
                className={Classes.sideDrawerButton}>
                <img src={MenuButton} alt={'menu button'}/>
            </button>
            <Logo/>
            <nav className={Classes.desktopOnly}>
                <NavItems sideDraw={false}/>
            </nav>
        </header>
    );
};

export default ToolBar;