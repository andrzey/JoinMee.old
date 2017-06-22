import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, Platform, View, FlatList, StyleSheet } from 'react-native';

import { iconsMap } from '../../utils/app-icons';
import * as actions from '../../actions/happening.actions';
import HappeningListItem from '../happeningtab/HappeningListItem';

class SecondTabScreen extends Component {
  constructor(props) {
    super(props);

    this._navigateToHappening = this._navigateToHappening.bind(this);
    this._selectHappening = this._selectHappening.bind(this);
    this._loadMyHappenings = this._loadMyHappenings.bind(this);
  }

  render() {
    const refreshing = this.props.pendingTasks > 0 ? true : false;

    return (
      <View style={styles.container}>
        <FlatList
          onRefresh={this._loadMyHappenings}
          refreshing={refreshing}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this._renderSeparator}
          data={this.props.userHappenings}
          renderItem={({ item }) => <HappeningListItem onPress={this._selectHappening} happening={item} />}
        />
      </View>
    );
  }

  componentDidMount() {
    this._loadMyHappenings();
  }


  _loadMyHappenings() {
    this.props.actions.loadMyHappenings(this.props.accessToken);
  }

  _navigateToHappening(happening) {
    this.props.navigator.push({
      screen: 'example.Happening',
      title: happening.title,
      animated: true
    });
  }

  _renderSeparator = () => {
    return <View style={styles.listItemSeperator} />
  }

  _selectHappening(happening) {
    this.props.actions.setSelectedHappening(happening);
    this._navigateToHappening(happening);
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
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    userHappenings: state.user.happenings,
    accessToken: state.user.accessToken,
    pendingTasks: state.user.pendingTasks,
    interests: state.user.interests
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondTabScreen);