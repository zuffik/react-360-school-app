import React from 'react';
import {AppRegistry} from 'react-360';
import {App} from "./src/App";
import {Menu} from "./src/components/menu/Menu";

export default class Photo360 extends React.Component {
    render() {
        return (
            <App initialRoute="index"/>
        );
    }
};

AppRegistry.registerComponent('Photo360', () => Photo360);
AppRegistry.registerComponent('Menu', () => Menu);
