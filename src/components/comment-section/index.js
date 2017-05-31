import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, StyleSheet } from 'react-native';

class CommentSection extends Component {
    constructor(props){
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
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 40,
        marginTop: 10
    },
    touchableContainer: {
        marginTop: 10
    },
    buttonText: {
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default CommentSection;