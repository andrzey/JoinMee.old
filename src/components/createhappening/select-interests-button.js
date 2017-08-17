import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectInterestsButton = (props) => {
    const isInterestsSelected = (props.interests != null) ? true : false;

    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            <Text style={(isInterestsSelected) ? styles.interestsIsSelected : styles.interestsIsNotSelected}>
                {
                    (isInterestsSelected) ?
                        props.interests.map((interest) => {
                            return interest + ' ';
                        })
                        : props.placeholder}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        height: 40,
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center'
    },
    interestsIsSelected: {
        fontSize: 15,
        color: '#333333'
    },
    interestsIsNotSelected: {
        fontSize: 15,
        color: '#C0C0C7'
    }
});

export default SelectInterestsButton;