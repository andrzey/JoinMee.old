import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CommentList from './comment-list';
import CommentInput from './comment-input';

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this._onChangeComment = this._onChangeComment.bind(this);
    }

    _onChangeComment(comment) {
        this.props.onChangeComment(comment);
    }

    render() {
        return (
            <View>
                <CommentInput
                    placeholder='Skriv en kommentar ..'
                    onChangeText={this._onChangeComment}
                    comment={this.props.comment}
                    onPress={this.props.onPress}
                />
                <CommentList comments={this.props.comments} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    textInput: {
        height: 40,
        fontSize: 14
    },
    touchableContainer: {
        height: 20
    },
    buttonText: {
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default CommentSection;