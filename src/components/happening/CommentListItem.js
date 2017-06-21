import React from 'react';
import { Image, View, Text } from 'react-native';

import { iconsMap } from '../../utils/app-icons';

const CommentListItem = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Image style={{ height: 30, width: 30, marginRight: 10 }} source={iconsMap['ios-contact-outline']} />
            <Text style={{ fontSize: 20 }}>{props.comment}</Text>
        </View>
    );
};

export default CommentListItem;