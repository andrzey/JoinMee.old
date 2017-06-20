import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { iconsMap } from '../../utils/app-icons';
import InterestsButton from './interests-button';
import * as actions from '../../actions/user.actions';

class InterestsModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interests: []
        }

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
        this._selectedInterest = this._selectedInterest.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <InterestsButton text='Sport' onPress={this._selectedInterest} />
                <InterestsButton text='Kultur' onPress={this._selectedInterest} />
                <InterestsButton text='Politikk' onPress={this._selectedInterest} />
                <InterestsButton text='Film' onPress={this._selectedInterest} />
                <InterestsButton text='Teater' onPress={this._selectedInterest} />
                <InterestsButton text='Dans' onPress={this._selectedInterest} />
                <InterestsButton text='Musikk' onPress={this._selectedInterest} />
                <InterestsButton text='Generelt' onPress={this._selectedInterest} />
            </View>
        );
    }

    _selectedInterest(interest) {
        if (!this.state.interests.includes(interest)) {
            this.setState({ interests: [...this.state.interests, interest] });
        } else {
            const filteredInterests = this.state.interests.filter((item) => {
                return item != interest;
            });
            this.setState({ interests: filteredInterests });
        }
    }

    _onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'cancel') {
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            } else if (event.id == 'save') {
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
                this.props.actions.updateInterests(this.props.accessToken, this.state.interests);
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        margin: 5
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        accessToken: state.user.accessToken
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestsModal);