import React from 'react';
import {Environment, Image, Text, View} from "react-360";
import styles from './styles';
import GazeButton from 'react-360-gaze-button';
import {screens} from "../../config/screens";

const MenuItem = ({image, label, onClick, screen}) =>
    <View>
        <GazeButton duration={3000}
                    onClick={onClick.bind(undefined, screen)}>
            {(time, isGazed) =>
                <View style={[styles.menuItem, isGazed ? styles.menuItemHover : {}]}>
                    <Image source={image} style={{width: 130, height: 65}}/>
                    <Text>{label}</Text>
                </View>
            }
        </GazeButton>
    </View>;

export class Menu extends React.Component {

    onClick = (item) => {
        console.log(item);
        Environment.setBackgroundImage(item.image);
    };

    render() {
        return <View style={[styles.wrapper, this.props.style]}>
            {screens.map((i, key) => <MenuItem key={key}
                                               index={key}
                                               screen={i}
                                               image={i.thumbnail}
                                               label={i.label}
                                               onClick={this.onClick}/>)}
        </View>;
    }
}
