import React from 'react';
import {View, StyleSheet} from "react-360";

export class Scene extends React.Component {
    render() {
        return <View style={styles.default}>
            {this.props.children}
        </View>;
    }
}

const styles = StyleSheet.create({
    default: {
        width: 4096,
        height: 720,
        //backgroundColor: 'rgba(20, 30, 130, 0.3)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
