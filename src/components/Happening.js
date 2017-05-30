import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import CommentSection from './comment-section';

class Happening extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const happening = this.props.happening;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{happening.name}</Text>
                <Text style={styles.text}>{happening.time}</Text>
                <Text style={styles.text}>{happening.place}</Text>
                <Text style={styles.text}>{happening.description}</Text>
                <CommentSection/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    text: {
        fontSize: 20
    }
});

export default Happening;