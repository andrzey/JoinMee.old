import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class HappeningListItem extends Component {
    _onPress = () => {
        this.props.onPress(this.props.happening);
    }
    render() {
        const happening = this.props.happening;

        return (
            <TouchableHighlight onPress={this._onPress}>
                <View style={styles.container}>
                    <Text style={styles.text}>{happening.title}</Text>
                    <Text style={styles.text}>{happening.time}</Text>
                    <Text style={styles.text}>{happening.place}</Text>
                    <Text style={styles.text}>{happening.description}</Text>
                </View>
            </TouchableHighlight>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    text: {
        fontSize: 20
    }
});

export default HappeningListItem;