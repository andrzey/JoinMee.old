import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

const ParticipationButton = (props) => {
    const buttonText = (props.isAttending) ? 'Bli ikke med' : 'Bli med';
    return (
        <TouchableHighlight onPress={props.onPress}>
            <View style={{ width: 100, height: 50, display: 'flex', justifyContent: 'center', backgroundColor: 'lightblue' }}>
                <Text style={{ textAlign: 'center', fontSize: 14, color: 'white' }}>
                    {buttonText}
                </Text>
            </View>
        </TouchableHighlight>
    );
};

export default ParticipationButton;