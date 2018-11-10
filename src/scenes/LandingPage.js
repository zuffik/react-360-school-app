import React from 'react';
import {Environment, StyleSheet} from "react-360";
import {Scene} from "./Scene";
import {Menu} from "../components/menu/Menu";

export class LandingPage extends React.Component {
    componentWillMount() {
        Environment.setBackgroundImage('/static_assets/namestie.jpg');
    }

    render() {
        return <Scene>
            <Menu style={style.menuPosition}/>
        </Scene>;
    }
}

const style = StyleSheet.create({
    menuPosition: {
        marginLeft: 500
    }
});
