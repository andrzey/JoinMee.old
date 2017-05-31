import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native'

import CommentSection from './comment-section';
import * as actions from '../actions/happening.actions';

class Happening extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        }

        this._onChangeComment = this._onChangeComment.bind(this);
        this._addComment = this._addComment.bind(this);
    }

    _onChangeComment(text) {
        this.setState({ comment: text })
    }

    _addComment() {
        this.props.actions.addComment(this.props.happening.id, this.state.comment);
    }

    render() {
        const happening = this.props.happening;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{happening.name}</Text>
                <Text style={styles.text}>{happening.time}</Text>
                <Text style={styles.text}>{happening.place}</Text>
                <Text style={styles.text}>{happening.description}</Text>
                <CommentSection
                    onChangeComment={this._onChangeComment}
                    text={this.state.comment}
                    onPress={this._addComment}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    text: {
        fontSize: 20
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Happening);