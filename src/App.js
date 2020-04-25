import React, { Component } from 'react';
import Aux from './hoc/Aux'
import Layout from './components/layout/layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Classes from './App.css'

class App extends Component {
    render() {
        return (
            <Aux>
                <Layout/>
                <BurgerBuilder
                    className={Classes.burgerBuilder}
                > </BurgerBuilder>
            </Aux>
        );
    }
}

export default App;
