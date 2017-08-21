import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import { iconsMap } from '../../utils/app-icons';

const CommentListItem = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={
                    {
                        uri: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/970618_10156725558660445_3717545919420985832_n.jpg?oh=5eb7914f51d5591f2ba0d42b3e8a06f8&oe=5A11BC73'
                    }
                } />
            <Text style={styles.text}>{props.comment}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
    },
    profileImage: {
        height: 30,
        width: 30,
        marginRight: 5,
        borderRadius: 15
    },
    text: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 14
    }
});

export default CommentListItem;