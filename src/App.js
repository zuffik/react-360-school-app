import React from 'react';
import {routes} from "./config/routes";

export class App extends React.Component {
    /*componentWillMount() {
        Environment.setBackgroundImage('/static_assets/namestie.jpg');
    }*/

    render() {
        const Component = routes.find(i => i.name === this.props.initialRoute).component;
        return <Component />;
    }
}