import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FBSDK from 'react-native-fbsdk';

import * as userActions from '../actions/user.actions';
import * as happeningActions from '../actions/happening.actions';

const { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } = FBSDK;

class Login extends Component {
    constructor(props) {
        super(props);

        this._login = this._login.bind(this);
        this._loadHappenings = this._loadHappenings.bind(this);
    }

    _login() {
        const facebookToken = "EAAcDhQnAuaIBADGwHKgPXDYZAQVnce6u7niCAd5uNs5omrqd1aIATCdVavubyA4mKPqOE7pbcM7ei7unzlPZCHAxajxMYiv3NZACwYqbHsUopx5cAXeNXtriw3xZCLtIYbmS6wmR5weEuWOl901ZAgvfLIDsFGw5wyorkpWqaZCMIIliZA9HAE3XzBPFfQ5fRffYKJyNjxZBZBWC4BZAHRzFIXZAo08GjlIXeAZD";

        this.props.actions.loginWithFacebook(facebookToken);
    }

    _loadHappenings() {
        this.props.actions.loadHappenings(this.props.accessToken);
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this._login}>
                    <Text style={{ fontSize: 40 }}>Logg inn</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._loadHappenings}>
                    <Text style={{ fontSize: 40 }}>La oss hente ting</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, userActions, happeningActions), dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        accessToken: state.user.accessToken
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);