import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class CommentSection extends Component {
    _onChangeText(text) {
        this.props.onChangeText(text);
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Kommenter ...'
                    onChangeText={(text) => _onChangeText}
                    value={this.props.text}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    textInput: {
        height: 40
    }
});

export default CommentSection;