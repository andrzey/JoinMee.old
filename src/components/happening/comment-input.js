import React from 'react';
import { FlatList, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CommentInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder={props.placeholder}
                onChangeText={(comment) => props.onChangeText(comment)}
                value={props.comment}
            />

            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.buttonText}>Kommenter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        fontSize: 14
    },
    buttonText: {
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default CommentInput;