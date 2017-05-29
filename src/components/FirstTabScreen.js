import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, AlertIOS } from 'react-native';

import { iconsMap } from '../utils/app-icons';

class FirstTabScreen extends Component {


  constructor(props) {
    super(props);
    this.props.navigator.setButtons({
      rightButtons: [
        {
          id: 'add',
          icon: iconsMap['ios-add'],
        }
      ]
    })
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
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

  render() {
    return (
      <Text>FirstTabScreen!</Text>
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