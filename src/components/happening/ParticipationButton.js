import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const ParticipationButton = (props) => {
    const buttonText = (props.isAttending) ? 'Bli ikke med' : 'Bli med';
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ width: 100, height: 50, display: 'flex', justifyContent: 'center', backgroundColor: 'lightblue' }}>
                <Text style={{ textAlign: 'center', fontSize: 14, color: 'white' }}>
                    {buttonText}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ParticipationButton;