import React, { Component } from 'react';
import { FlatList, View, TextInput, Text, TouchableHighlight, StyleSheet } from 'react-native';

import CommentListItem from './CommentListItem';

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this._onChangeText = this._onChangeComment.bind(this);
    }

    _onChangeComment(comment) {
        this.props.onChangeComment(comment);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Kommenter ...'
                    onChangeText={(comment) => this._onChangeComment(comment)}
                    value={this.props.comment}
                />
                <TouchableHighlight style={styles.touchableContainer} onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>Kommenter</Text>
                </TouchableHighlight>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={this.props.comments}
                    renderItem={({ item }) => <CommentListItem comment={item.comment} />}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
    },
    textInput: {
        height: 30,
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