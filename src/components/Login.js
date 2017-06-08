import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FBSDK from 'react-native-fbsdk';

import * as userActions from '../actions/user.actions';
import * as happeningActions from '../actions/happening.actions';

const { AccessToken, LoginManager } = FBSDK;

class Login extends Component {
    constructor(props) {
        super(props);

        this._login = this._login.bind(this);
    }

    _login() {
        let _this = this;

        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            _this.props.actions.loginWithFacebook(data.accessToken);
                        });
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error);
            }
        );
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        accessToken: state.user.accessToken
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);