import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const HappeningInfo = (props) => {
    return (
        <View>
            <Text style={styles.header}>{props.title}</Text>
            <Text style={styles.subheader}>{props.time}</Text>
            <Text style={styles.subheader}>{props.address}</Text>
            <Text style={styles.subheader}>{props.interest}</Text>
            <Text style={styles.body}>{props.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        marginBottom: 5
    },
    subheader: {
        fontSize: 16,
        marginBottom: 5
    },
    body: {
        fontSize: 14
    }
});

export default HappeningInfo;