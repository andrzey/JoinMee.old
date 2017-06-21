import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { FlatList, View, Text, StyleSheet, Alert, AlertAndroid, Platform } from 'react-native'

import CommentSection from './CommentSection';
import CommentListItem from './CommentListItem';
import ParticipationButton from './ParticipationButton';
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
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{this.props.happening.title}</Text>
                    <Text style={styles.text}>{this.props.happening.time}</Text>
                    <Text style={styles.text}>{this.props.happening.place}</Text>
                    <Text style={styles.text}>{this.props.happening.description}</Text>
                </View>
                <ParticipationButton isAttending={isAttending} onPress={this._toggleParticipation} />
                <CommentSection
                    onChangeComment={this._onChangeComment}
                    comment={this.state.comment}
                    onPress={this._addComment}
                    comments={this.props.happening.comments}
                />
            </View>
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
        flex: 1,
        margin: 10,
    },
    text: {
        fontSize: 20
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