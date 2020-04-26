import React from 'react';
import Classes from './SideDrawer.css'
import NavItems from "../NavItems/NavItems";

const SideDrawer = (props) => {
    return(props.show ?
        <div className={[Classes.SideDrawer, Classes.Open].join(' ')}>
            <nav>
                <NavItems sideDraw={true}/>
            </nav>
        </div> : null);
};

export default SideDrawer;