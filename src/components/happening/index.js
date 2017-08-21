import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { ScrollView, StyleSheet, Alert, Platform } from 'react-native'

import CommentSection from './comment-section';
import HappeningInfo from './happening-info';
import ParticipationButton from './participation-button';
import * as actions from '../../actions/happening.actions';
import * as listActions from '../../actions/happening-list.actions';

class Happening extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        }

        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
        this._onChangeComment = this._onChangeComment.bind(this);
        this._addComment = this._addComment.bind(this);
        this._toggleParticipation = this._toggleParticipation.bind(this);
        this._isUserAttending = this._isUserAttending.bind(this);
    }

    render() {
        const isAttending = this._isUserAttending(this.props.name, this.props.participants);

        return (
            <ScrollView style={styles.container}>
                <HappeningInfo
                    title={this.props.happening.title}
                    time={this.props.happening.time}
                    address={this.props.happening.address}
                    description={this.props.happening.description}
                    interest={this.props.happening.interest}
                />
                <ParticipationButton
                    isAttending={isAttending}
                    onPress={this._toggleParticipation}
                />
                <CommentSection
                    onChangeComment={this._onChangeComment}
                    comment={this.state.comment}
                    onPress={this._addComment}
                    comments={this.props.happening.comments}
                />
            </ScrollView>
        );
    }

    _onNavigatorEvent(event) {
        if (event.id === 'willDisappear') {
            this.props.actions.updateHappening(this.props.happening);
        }
    }

    _onChangeComment(text) {
        this.setState({ comment: text })
    }

    _addComment() {
        if (!this.state.comment) return;

        this.props.actions.addComment(this.props.accessToken, this.props.happening.id, this.state.comment);
        this.setState({ comment: null })
    }

    _toggleParticipation() {
        if (!this._isUserAttending(this.props.name, this.props.participants)) {
            Alert.alert(
                'Bli med',
                `Vil du bli med på ${this.props.happening.title}?`,
                [
                    {
                        text: 'Avbryt',
                        onPress: () => { }, style: 'cancel'
                    },
                    {
                        text: 'Bli med',
                        onPress: () => this.props.actions.joinHappening(this.props.accessToken, this.props.name, this.props.happening.id)
                    },
                ]
            );
        } else {
            Alert.alert(
                'Ikke bli med',
                `Vil du ikke bli med på ${this.props.happening.title} likevel?`,
                [
                    {
                        text: 'Avbryt',
                        onPress: () => { }, style: 'cancel'
                    },
                    {
                        text: 'Ikke bli med',
                        onPress: () => this.props.actions.leaveHappening(this.props.accessToken, this.props.name, this.props.happening.id)
                    },
                ]
            );
        }
    }

    _isUserAttending(user, participants) {
        let isAttending = false;

        for (let p of participants) {
            if (user === p.name) {
                isAttending = true;
            }
        }

        return isAttending;
    }
}

var styles = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 5,
        flex: 1,
        backgroundColor: 'transparent'
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, actions, listActions), dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.name,
        happening: state.selectedHappening,
        participants: state.selectedHappening.participants,
        accessToken: state.user.accessToken
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Happening);