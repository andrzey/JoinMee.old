import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList, View, Text, StyleSheet } from 'react-native'

import CommentField from './CommentField'; 
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
        this.props.actions.addComment(this.props.happening.id, this.state.comment);
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
                <CommentField
                    onChangeComment={this._onChangeComment}
                    text={this.state.comment}
                    onPress={this._addComment}
                />
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={this.props.happening.comments}
                    renderItem={({ item }) => <Text>{item.comment}</Text>}
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
        happening: state.selectedHappening
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Happening);