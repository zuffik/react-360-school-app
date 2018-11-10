import React from 'react';
import {Environment, Image, Text, View} from "react-360";
import styles from './styles';
import GazeButton from 'react-360-gaze-button';
import {screens} from "../../config/screens";

const MenuItem = ({image, label, onClick, screen, index, opacity = undefined}) =>
    <View>
        <GazeButton duration={2000}
                    onClick={onClick.bind(undefined, screen, index)}>
            {(time, isGazed) => {
                const opacity = time / 2000;
                return <View style={[styles.menuItem, {opacity: opacity < 0.01 || !isGazed ? 1 : opacity}]}>
                    <Image source={image} style={{width: 130, height: 65}}/>
                    <Text>{label}</Text>
                </View>;
            }
            }
        </GazeButton>
    </View>;

export class Menu extends React.Component {

    onClick = (item, index) => {
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
