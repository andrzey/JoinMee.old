import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput, Platform } from 'react-native';
import uuid from 'react-native-uuid';

import { iconsMap } from '../utils/app-icons';
import * as actions from '../actions/happening-list.actions';

class CreateModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: uuid.v4(),
            name: null,
            time: null,
            place: null,
            description: null
        };

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
            if (event.id == 'cancel') {
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            } else if (event.id == 'save') {
                this.props.actions.addHappening(this.state);
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
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Tid'
                    onChangeText={(time) => this.setState({ time })}
                    value={this.state.time}
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Sted'
                    onChangeText={(place) => this.setState({ place })}
                    value={this.state.place}
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Beskrivelse'
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
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

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);