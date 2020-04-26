import React, { Component } from 'react';
import Aux from './hoc/Aux'
import TopLayout from './components/TopLayout/TopLayout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Classes from './App.css'

class App extends Component {
    render() {
        return (
            <Aux>
                <TopLayout/>
                <BurgerBuilder
                    className={Classes.burgerBuilder}
                > </BurgerBuilder>
            </Aux>
        );
    }
}

export default App;
