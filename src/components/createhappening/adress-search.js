import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import * as actions from '../../actions/new-happening.actions';

class AddressSearch extends Component {
    constructor(props) {
        super(props)

        this.props.navigator.setButtons({
            leftButtons: [{
                id: 'cancel',
                title: 'Cancel',
                buttonFontSize: 14,
                buttonFontWeight: '600'
            }]
        })
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
        this._onAdressSelected = this._onAdressSelected.bind(this);
    }

    render() {
        return (
            <GooglePlacesAutocomplete
                enablePoweredByContainer={false}
                placeholder='Search'
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='auto'
                fetchDetails={true}
                renderDescription={(row) => row.description}
                onPress={this._onAdressSelected}
                getDefaultValue={() => {
                    return '';
                }}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyC47x1dszvWqfN3KdfanlfsWHZsO27mRSY',
                    language: 'no',
                    country: 'Norway'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                }}

                debounce={200}
            />
        );
    }

    _onAdressSelected(data, details) {
        this.props.actions.addAddress(data.description);
        this.props.navigator.dismissModal({
            animationType: 'slide-down'
        });
    }

    _onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'cancel') {
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            }
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressSearch);