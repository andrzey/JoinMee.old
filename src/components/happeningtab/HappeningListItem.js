import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class HappeningListItem extends Component {
    _onPress = () => {
        this.props.onPress(this.props.happening);
    }
    render() {
        const happening = this.props.happening;

        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>{happening.title}</Text>
                    <Text style={styles.text}>{happening.time}</Text>
                    <Text style={styles.text}>{happening.address}</Text>
                    <Text style={styles.text}>{happening.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#eceff1',
    },
    titleText: {
        fontSize: 25,
        fontFamily: 'Helvetica',
    },
    text: {
        fontSize: 15
    }
});

export default HappeningListItem;