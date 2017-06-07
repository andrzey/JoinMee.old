import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import FBSDK from 'react-native-fbsdk';

const { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } = FBSDK;

class Login extends Component {
    constructor(props) {
        super(props);

        this._login = this._login.bind(this);
    }

    _login() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    console.log('Login success with permissions: '
                        + result.grantedPermissions.toString());

                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            console.log(data.accessToken.toString())
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
            <View>
                <TouchableHighlight onPress={this._login}>
                    <Text style={{ fontSize: 40 }}>Logg inn</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Login;