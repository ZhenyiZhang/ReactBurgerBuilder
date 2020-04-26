import React from 'react'
import MyLogo from './images/burger.png';
import Classes from './Logo.css';

const Logo = (props) => {
    return(
        <img className={Classes.Logo} src={MyLogo} alt={'BurgerBuilderLogo'} />
    )
};

export default Logo;