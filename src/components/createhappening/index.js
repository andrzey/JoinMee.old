import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import Moment from 'moment';
import 'moment/locale/nb';

import DateTimePicker from './date-time-picker';
import SelectAddressButton from './select-address-button';
import SelectInterestsButton from './select-interests-button';
import { iconsMap } from '../../utils/app-icons';
import * as happeningActions from '../../actions/happening.actions';
import * as newHappeningActions from '../../actions/new-happening.actions';


class CreateModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            time: Moment().format('D[.] MMMM [kl.] HH:mm'),
            description: null,
            creator: this.props.userId,
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
        this._onPlaceHandle = this._onPlaceHandle.bind(this);
        this._onInterestsHandle = this._onInterestsHandle.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    maxLength={64}
                    multiline={false}
                    placeholder='Arrangement navn'
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />

                <DateTimePicker
                    dateTime={this.state.time}
                    onDateChange={(time) => this.setState({ time })}
                />

                <SelectAddressButton
                    address={this.props.address}
                    placeholder='Sted'
                    onPress={this._onPlaceHandle}
                />

                <SelectInterestsButton
                    interests={this.props.interests}
                    placeholder='Interesser'
                    onPress={this._onInterestsHandle}
                />

                <TextInput
                    style={styles.textInput}
                    placeholderTextColor='#C0C0C7'
                    multiline={true}
                    placeholder='Beskrivelse'
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                />
            </View>
        );
    }

    _onPlaceHandle() {
        this.props.navigator.showModal({
            screen: "example.AdressSearch",
            title: "Legg til sted",
            animationType: 'slide-up'
        });
    }

    _onInterestsHandle() {
        this.props.navigator.showModal({
            screen: "example.Interests",
            title: "Legg til interesser",
            animationType: 'slide-up',
            passProps: { isNavigatingFromCreateHappening: true }
        });
    }

    _onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'cancel') {
                this.props.actions.cancelNewHappening();
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            } else if (event.id == 'save') {
                const happeningObject = { address: this.props.address, interest: this.props.interests, ...this.state };

                this.props.actions.addHappening(this.props.accessToken, happeningObject);
                this.props.actions.loadHappenings(this.props.accessToken);
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            }
        }
    }
}

var styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: 'white'
    },
    textInput: {
        height: 40,
        marginTop: 0,
        marginRight: 5,
        marginBottom: 0,
        marginLeft: 5,
        fontSize: 15,
        backgroundColor: 'transparent',
        flex: 1,
        color: '#333333'
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...happeningActions, ...newHappeningActions }, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        accessToken: state.user.accessToken,
        userId: state.user.userId,
        address: state.newHappening.address,
        interests: state.newHappening.interests
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);