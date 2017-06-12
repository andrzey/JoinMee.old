import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList, View, Text, StyleSheet, AlertIOS, AlertAndroid, Platform } from 'react-native'

import CommentSection from './CommentSection';
import CommentListItem from './CommentListItem';
import ParticipationButton from './ParticipationButton';
import * as actions from '../actions/happening.actions';
import * as listActions from '../actions/happening-list.actions';

class Happening extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        }

        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
        this._onChangeComment = this._onChangeComment.bind(this);
        this._addComment = this._addComment.bind(this);
        this._joinHappening = this._joinHappening.bind(this);
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

    _joinHappening() {
        if (Platform.OS === 'ios') {
            AlertIOS.alert('Du blir med!');
        } else {
            AlertAndroid.alert('Du blir med');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{this.props.happening.name}</Text>
                    <Text style={styles.text}>{this.props.happening.time}</Text>
                    <Text style={styles.text}>{this.props.happening.place}</Text>
                    <Text style={styles.text}>{this.props.happening.description}</Text>
                </View>
                <ParticipationButton onPress={this._joinHappening} />
                <CommentSection
                    onChangeComment={this._onChangeComment}
                    comment={this.state.comment}
                    onPress={this._addComment}
                    comments={this.props.happening.comments}
                />
            </View>
        );
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
        happening: state.selectedHappening,
        accessToken: state.user.accessToken
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Happening);