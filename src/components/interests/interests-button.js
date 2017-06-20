import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet, Platform } from 'react-native';

class InterestsButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        }
        this._onPress = this._onPress.bind(this);
    }

    render() {
        const backgroundColor = (this.state.isPressed) ? { backgroundColor: '#006400' } : { backgroundColor: 'lightblue' };

        return (
            <TouchableHighlight
                onPress={this._onPress}
                style={[styles.container, backgroundColor]}
                underlayColor='#006400'>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableHighlight>
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
        height: 30,
        margin: 5
    },
    text: {
        margin: 5,
        fontSize: 20
    }
});

export default InterestsButton;