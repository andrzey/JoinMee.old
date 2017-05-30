import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Platform } from 'react-native';

import { iconsMap } from '../utils/app-icons';

class CreateModal extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setButtons({
            rightButtons: [{
                id: 'save',
                ...Platform.select({
                    ios: {
                        title: 'Save',
                        buttonFontSize: 14,
                        buttonFontWeight: '600'
                    },
                    android: {
                        icon: iconsMap['done']
                    },
                }),

            }],
            leftButtons: [{
                id: 'cancel',
                title: 'Cancel',
                buttonFontSize: 14,
                buttonFontWeight: '600'
            }]
        })
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }
    _onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'cancel' || event.id == 'save') {
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Arrangement navn'
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Tid'
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Sted'
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Beskrivelse'
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textInput: {
        height: 40,
        width: '100%',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 0,
        marginLeft: 5

    }
});

export default CreateModal;