import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectAddressButton = (props) => {
    const isAddressSelected = (props.address != null) ? true : false;
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            <Text style={(isAddressSelected) ? styles.adressSelected : styles.adressNotSelected}>
                {
                    (isAddressSelected) ? props.address : props.placeholder
                }
            </Text>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    touchable: {
        height: 40,
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center'
    },
    adressSelected: {
        fontSize: 15, color: '#333333'
    },
    adressNotSelected: {
        fontSize: 15, color: '#C0C0C7'
    }
});

export default SelectAddressButton;