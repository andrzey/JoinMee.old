import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, Platform, View, FlatList, StyleSheet } from 'react-native';

import { iconsMap } from '../utils/app-icons';
import HappeningListItem from './HappeningListItem';

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
    this._navigateToHappening = this._navigateToHappening.bind(this);
    this._selectHappening = this._selectHappening.bind(this);
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

  _navigateToHappening(happening) {
    this.props.navigator.push({
      screen: 'example.Happening',
      title: happening.name,
      animated: true,
      passProps: { happening }
    });
  }

  _renderSeparator = () => {
    return <View style={styles.listItemSeperator} />
  }

  _selectHappening(happening) {
    this._navigateToHappening(happening);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={this._renderSeparator}
          data={this.props.happenings}
          renderItem={({ item }) => <HappeningListItem onPress={this._selectHappening} happening={item} />}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItemSeperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    happenings: state.happenings
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTabScreen);