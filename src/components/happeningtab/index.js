import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, Platform, View, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'

import { iconsMap } from '../../utils/app-icons';
import * as actions from '../../actions/happening.actions';
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
    this._loadHappenings = this._loadHappenings.bind(this);
  }

  render() {
    const refreshing = this.props.pendingTasks > 0 ? true : false;

    return (
      <View style={styles.container}>
        <FlatList
          onRefresh={this._loadHappenings}
          refreshing={refreshing}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={this._renderHeader}
          ItemSeparatorComponent={this._renderSeparator}
          data={this.props.happenings}
          renderItem={({ item }) => <HappeningListItem onPress={this._selectHappening} happening={item} />}
        />
      </View>
    );
  }

  componentDidMount() {
    this._loadHappenings();
  }

  _loadHappenings() {
    this.props.actions.loadHappenings(this.props.accessToken);
  }

  _onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'add') {
        this.props.navigator.showModal({
          screen: "example.CreateHappening",
          title: "Lag ny Happening",
          animationType: 'slide-up'
        });
      }
    }
  }

  _navigateToHappening(happening) {
    this.props.navigator.push({
      screen: 'example.Happening',
      title: happening.title,
      animated: true
    });
  }

  _renderHeader() {
    return <View style={styles.header} />
  }

  _renderSeparator() {
    return <View style={styles.listItemSeperator} />
  }

  _selectHappening(happening) {
    this.props.actions.setSelectedHappening(happening);
    this._navigateToHappening(happening);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItemSeperator: {
    height: 5,
    width: '100%',
  },
  header: {
    height: 5,
    width: '100%'
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    happenings: state.happenings,
    accessToken: state.user.accessToken,
    pendingTasks: state.user.pendingTasks,
    interests: state.user.interests
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTabScreen);