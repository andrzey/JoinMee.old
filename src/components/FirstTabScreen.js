import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, TouchableHighlight, Platform } from 'react-native';

import { iconsMap } from '../utils/app-icons';

class FirstTabScreen extends Component {


  constructor(props) {
    super(props);
    this.props.navigator.setButtons({
      rightButtons: [{
        id: 'add',
        ...Platform.select({
          ios: {
            icon: iconsMap['ios-add'],
          },
          android: {
            icon: iconsMap['add']
          },
        })
      }]
    })
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'add') {
        this.props.navigator.showModal({
          screen: "example.CreateModal",
          title: "Modal",
          passProps: {},
          navigatorButtons: {
            rightButtons: [{
              id: 'save',
              title: 'Save',
              buttonFontSize: 14,
              buttonFontWeight: '600'
            }],
            leftButtons: [{
              id: 'cancel',
              title: 'Cancel',
              buttonFontSize: 14,
              buttonFontWeight: '600'
            }]
          },
          animationType: 'slide-up'
        });
      }
    }
  }

  _onPressButton() {
    this.props.navigator.push({
      screen: 'example.Happening',
      title: 'Happening',
      animated: true
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <Text>FirstTabScreen!</Text>
      </TouchableHighlight>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTabScreen);