import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';
import 'moment/locale/nb';

import { iconsMap } from '../../utils/app-icons';
import * as actions from '../../actions/happening.actions';

class CreateModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            time: Moment().format('D MMMM [kl.] HH:mm'),
            description: null,
            creator: this.props.userId,
            interest: null
        };

        this.props.navigator.setButtons({
            rightButtons: [{
                id: 'save',
                ...Platform.select({
                    ios: {
                        title: 'Save',
                        buttonFontSize: 14,
                        buttonFontWeight: '600'
                    },
                    android: {
                        icon: iconsMap['done']
                    },
                }),

            }],
            leftButtons: [{
                id: 'cancel',
                title: 'Cancel',
                buttonFontSize: 14,
                buttonFontWeight: '600'
            }]
        })
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
        this._onPlaceHandle = this._onPlaceHandle.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Arrangement navn'
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.time}
                    mode='datetime'
                    format='D MMMM [kl.] HH:mm'
                    confirmBtnText='Ok'
                    cancelBtnText='Avbryt'
                    showIcon={false}
                    customStyles={
                        {
                            dateInput: {
                                borderWidth: 0,
                                alignItems: 'flex-start',
                                marginLeft: 5
                            }
                        }
                    }
                    minuteInterval={30}
                    is24Hour={true}
                    onDateChange={(time) => { this.setState({ time }); }}
                />
                <TouchableOpacity style={{ height: 40, flex: 1 }} onPress={this._onPlaceHandle}>
                    <Text style={{ alignItems: 'center' }}>
                        {(this.props.address != null) ? this.props.address : 'Sted'}
                    </Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Beskrivelse'
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder='Interesse'
                    onChangeText={(interest) => this.setState({ interest })}
                    value={this.state.interest}
                />
            </View>
        );
    }

    _onPlaceHandle() {
        this.props.navigator.showModal({
            screen: "example.AdressSearch",
            title: "Legg til sted",
            animationType: 'slide-up'
        });
    }

    _onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'cancel') {
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            } else if (event.id == 'save') {
                const happeningObject = { address: this.props.address, ...this.state };
                
                this.props.actions.addHappening(this.props.accessToken, happeningObject);
                this.props.actions.loadHappenings(this.props.accessToken);
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            }
        }
    }
}

var styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: 'white'
    },
    textInput: {
        height: 40,
        width: '100%',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 0,
        marginLeft: 5,
        flex: 1
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        accessToken: state.user.accessToken,
        userId: state.user.userId,
        address: state.newHappening.address
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);