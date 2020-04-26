import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Classes from './TopLayout.css';
import ToolBar from "../Navigation/Toolbar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class TopLayout extends Component {
    state = {
        sideDrawer: false
    };

    sideDrawerHandler = () => {
        this.setState({
            sideDrawer: !this.state.sideDrawer
        })
    };

    render() {
        return (
            <Aux>
                <ToolBar sideDrawerButtonClick={this.sideDrawerHandler}/>
                <SideDrawer show={this.state.sideDrawer}/>
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default TopLayout;