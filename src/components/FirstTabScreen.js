import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class FirstTabScreen extends Component {
  constructor(props) {
    super(props)
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