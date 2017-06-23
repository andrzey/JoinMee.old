import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

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
        const backgroundColor = (this.state.isPressed) ? { backgroundColor: '#006400' } : { backgroundColor: 'lightblue' };

        return (
            <TouchableOpacity
                onPress={this._onPress}
                style={[styles.container, backgroundColor]}
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
        height: 30,
        margin: 5
    },
    text: {
        margin: 5,
        fontSize: 20
    }
});

export default InterestsButton;