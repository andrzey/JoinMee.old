import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';

import { iconsMap } from '../../utils/app-icons';

class InterestsButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        }

        this._onPress = this._onPress.bind(this);
    }

    componentWillMount() {
        if (this.props.isPressed) {
            this.setState({ isPressed: true });
        }
    }

    render() {
        const buttonStyle = (this.state.isPressed) ? styles.isPressed : styles.isNotPressed;

        return (
            <TouchableOpacity
                onPress={this._onPress}
                style={[styles.container, buttonStyle]}
                underlayColor='#006400'>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

    _onPress() {
        this.setState({ isPressed: !this.state.isPressed })
        this.props.onPress(this.props.text);
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        margin: 5
    },
    text: {
        margin: 5,
        fontSize: 20
    },
    isPressed: {
        backgroundColor: '#e6f3f7',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5
    },
    isNotPressed: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 5
    }
});

export default InterestsButton;