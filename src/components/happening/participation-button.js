import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const ParticipationButton = (props) => {
    const buttonText = (props.isAttending) ? 'Bli ikke med' : 'Bli med';

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 100,
        backgroundColor: 'lightblue',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    }
});

export default ParticipationButton;