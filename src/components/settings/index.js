import React, { Component } from 'react';
import { Text, Platform, Image, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Settings extends Component {
    constructor(props) {
        super(props);

        this._changeInterests = this._changeInterests.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={{ uri: this.props.user.profilePicture }}
                />
                <Text style={styles.text}>{this.props.user.name}</Text>
                <TouchableOpacity onPress={this._changeInterests}>
                    <View style={styles.interestsContainer}>
                        {
                            (this.props.user.interests && this.props.user.interests.length > 0) ?
                                this.props.user.interests.map(item => {
                                    return <Text key={item}>{item}</Text>
                                }) : <Text>Ikke valgt noen interesser. Velg noen?</Text>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _changeInterests() {
        this.props.navigator.showModal({
            screen: "example.Interests",
            title: "Velg interesser",
            animationType: 'slide-up'
        });
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 5
    },
    text: {
        margin: 5
    },
    interestsContainer: {
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);