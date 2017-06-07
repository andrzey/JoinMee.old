import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FBSDK from 'react-native-fbsdk';

import * as userActions from '../actions/user.actions';

const { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } = FBSDK;

class Login extends Component {
    constructor(props) {
        super(props);

        this._login = this._login.bind(this);
    }

    _login() {
        const facebookToken = "EAAcDhQnAuaIBADGwHKgPXDYZAQVnce6u7niCAd5uNs5omrqd1aIATCdVavubyA4mKPqOE7pbcM7ei7unzlPZCHAxajxMYiv3NZACwYqbHsUopx5cAXeNXtriw3xZCLtIYbmS6wmR5weEuWOl901ZAgvfLIDsFGw5wyorkpWqaZCMIIliZA9HAE3XzBPFfQ5fRffYKJyNjxZBZBWC4BZAHRzFIXZAo08GjlIXeAZD";
        console.log('Inne i komponenten');

        this.props.actions.loginWithFacebook(facebookToken);
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this._login}>
                    <Text style={{ fontSize: 40 }}>Logg inn</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);