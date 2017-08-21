import React from 'react';
import { FlatList} from 'react-native';

import CommentListItem from './comment-list-item';

const CommentList = (props) => {
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={props.comments}
            renderItem={({ item }) => <CommentListItem comment={item.comment} />}
        />
    );
};

export default CommentList;