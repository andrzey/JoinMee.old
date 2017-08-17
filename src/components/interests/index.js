import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { iconsMap } from '../../utils/app-icons';
import InterestsButton from './interests-button';
import Interests from '../../utils/interests.utils';
import * as userActions from '../../actions/user.actions';
import * as newHappeningActions from '../../actions/new-happening.actions';

class InterestsModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interests: this.props.interests
        }

        this.props.navigator.setButtons({
            rightButtons: [{
                id: 'save',
                ...Platform.select({
                    ios: {
                        title: 'Lagre',
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
                title: 'Avbryt',
                buttonFontSize: 14,
                buttonFontWeight: '600'
            }]
        })
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
        this._selectedInterest = this._selectedInterest.bind(this);
        this._includes = this._includes.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    Interests.map((interest) => {
                        return (
                            <InterestsButton
                                key={interest}
                                text={interest}
                                onPress={this._selectedInterest}
                                isPressed={this._includes(interest)}
                            />
                        );
                    })
                }
            </View>
        );
    }

    _includes(interest) {
        const foundInterest = _.find(this.props.interests, (item) => {
            return item === interest;
        })

        return (foundInterest) ? true : false;;
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
                if (this.props.isNavigatingFromCreateHappening) {
                    this.props.actions.addInterestsOnHappening(this.state.interests);
                } else {
                    this.props.actions.updateInterests(this.props.accessToken, this.state.interests);
                }
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
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
        actions: bindActionCreators({ ...userActions, ...newHappeningActions }, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        accessToken: state.user.accessToken,
        interests: state.user.interests
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestsModal);